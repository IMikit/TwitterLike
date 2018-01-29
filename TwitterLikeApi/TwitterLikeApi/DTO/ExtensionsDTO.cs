using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using TwitterLikeApi.Models;

namespace TwitterLikeApi.DTO
{
    public static class ExtensionsDTO
    {
        public static DTOAccount ToDTO (this Account account)
        {
            DTOAccount newDTO = new DTOAccount();
            newDTO.Id = account.Id;
            newDTO.Email = account.Email;
            newDTO.Name = account.Name;

            return newDTO;
        }
    }
}