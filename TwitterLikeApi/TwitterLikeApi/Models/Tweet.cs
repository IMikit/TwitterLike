using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace TwitterLikeApi.Models
{
    public class Tweet
    {
        public int Id { get; set; }

        [Required]
        public string Message { get; set; }

        [Required]
        public DateTime DateCreation { get; set; }

        public int AccountId { get; set; }

        public Account Account { get; set; }
    }
}