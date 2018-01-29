using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace TwitterLikeApi.Models
{
    public class Account
    {
        public int Id { get; set; }

        [Required]
        public string Email { get; set; }

        [Required]
        public string Password { get; set; }

        [Index(IsUnique = true)]
        [StringLength(450)]
        [Required]
        public string Name { get; set; }
    }
}