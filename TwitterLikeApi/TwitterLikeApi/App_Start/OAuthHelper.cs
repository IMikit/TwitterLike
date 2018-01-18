using System;
using System.Security.Claims;
using System.Web;
using TwitterLikeApi.Models;

namespace TwitterLikeApi
{
    public static class OAuthHelper
    {
        public static Account CreateUserInfosFromSecurityToken()
        {
            var claimsPrincipal = RetrieveClaimsPrincipal();
            Account result = null;
            if (claimsPrincipal != null && claimsPrincipal.Identity.IsAuthenticated)
            {
                var id = Convert.ToInt32(claimsPrincipal.FindFirst(claim => claim.Type == ClaimTypes.NameIdentifier)?.Value);
                var userName = claimsPrincipal.FindFirst(claim => claim.Type == ClaimTypes.Name)?.Value;
                var email = claimsPrincipal.FindFirst(claim => claim.Type == ClaimTypes.Email)?.Value;

                result = new Account
                {
                    Id = id,
                    Email = email
                };
            }

            return result;
        }

        private static ClaimsPrincipal RetrieveClaimsPrincipal()
        {
            return HttpContext.Current?.GetOwinContext()?.Authentication?.User;
        }
    }
}