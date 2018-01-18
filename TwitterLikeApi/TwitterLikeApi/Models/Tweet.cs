using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace TwitterLikeApi.Models
{
    public class Tweet
    {
        public int Id { get; set; }

        [Required]
        public string Message { get; set; }

        public int ProfileId { get; set; }

        public virtual Profile Profile { get; set; }
    }
}