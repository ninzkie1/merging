using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MoralesFiFthCRUD.ViewModels
{
    public class SellerViewModel
    {
        public int UserID { get; set; }
        public string Firstname { get; set; }
        public string Lastname { get; set; }
        public string email { get; set; }
        public int phonenumber { get; set; }
        public string address { get; set; }
        public string passWord { get; set; }
        public List<ProductViewModel> Products { get; set; }
    }
}