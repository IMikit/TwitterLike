using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using TwitterLikeApi.Models;

namespace TwitterLikeApi.Controllers
{
    [Authorize]
    public class TweetsController : ApiController
    {
        private TwitterLikeApiContext db = new TwitterLikeApiContext();
        public Account AnthenticatedUser { get; private set; }

        public TweetsController()
        {
            AnthenticatedUser = OAuthHelper.CreateUserInfosFromSecurityToken();
        }

        // GET: api/Tweets
        public IQueryable<Tweet> GetTweets()
        {
            return db.Tweets.OrderByDescending(t => t.DateCreation);
        }

        // GET: api/Tweets/AccountId
        public IQueryable<Tweet> GetTweetsByAccountId(int id)
        {
            return db.Tweets.Where(t => t.AccountId == id).OrderByDescending(t => t.DateCreation);
        }

        // POST: api/Tweets
        [ResponseType(typeof(Tweet))]
        public IHttpActionResult PostTweet(Tweet tweet)
        {
            tweet.AccountId = this.AnthenticatedUser.Id;
            tweet.DateCreation = DateTime.Now;

            if (tweet.Message == null)
            {
                return BadRequest();
            }

            db.Tweets.Add(tweet);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = tweet.Id }, tweet);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool TweetExists(int id)
        {
            return db.Tweets.Count(e => e.Id == id) > 0;
        }
    }
}