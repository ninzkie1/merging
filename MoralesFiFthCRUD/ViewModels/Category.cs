using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MoralesFiFthCRUD.ViewModels
{
    using System;
    using System.Collections.Generic;

    public partial class Category
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Category()
        {
            this.Tbl_Product = new HashSet<Products>();
        }

        public int id { get; set; }
        public string CategoryName { get; set; }
        public Nullable<bool> IsActive { get; set; }
        public Nullable<bool> IsDelete { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Products> Tbl_Product { get; set; }
    }
}
