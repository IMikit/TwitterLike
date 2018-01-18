using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.Owin.Security;
using Microsoft.Owin.Security.OAuth;
using TwitterLikeApi.Models;

namespace TwitterLikeApi
{
    internal sealed class CustomOAuthAuthorizationServerProvider : OAuthAuthorizationServerProvider
    {
        public override async Task ValidateClientAuthentication(OAuthValidateClientAuthenticationContext context)
        {
            await Task.Run(() => context.Validated());
        }

        public override async Task GrantResourceOwnerCredentials(OAuthGrantResourceOwnerCredentialsContext context)
        {
            await Task.Run(delegate
            {
                context.OwinContext.Response.Headers.Add("Access-Control-Allow-Origin", new[] { "*" });

                using (var db = new TwitterLikeApiContext())
                {
                    var user = db.Accounts.Where(a => a.Email == context.UserName && a.Password == context.Password).FirstOrDefault();
                    if (user == null)
                    {
                        context.SetError("invalid_grant", "The user name or password is incorrect.");
                    }
                    else
                    {
                        var identity = new ClaimsIdentity(context.Options.AuthenticationType);
                        identity.AddClaim(new Claim("sub", context.UserName));
                        identity.AddClaim(new Claim(ClaimTypes.Role, "user"));
                        identity.AddClaim(new Claim(ClaimTypes.Email, user.Email));
                        identity.AddClaim(new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()));

                        var ticket = new AuthenticationTicket(identity, new AuthenticationProperties());
                        context.Validated(ticket);
                    }
                }
            });
        }
    }
}