using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace TwitterLikeApi.Models
{
    public class Profile
    {
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }

        public int AccountId { get; set; }

        public virtual Account Account { get; set; }
    }
}