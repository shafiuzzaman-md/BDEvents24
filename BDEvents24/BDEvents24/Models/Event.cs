using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BDEvents24.Models
{
    public class Event
    {
        public int EventID { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public DateTime Date { get; set; }
        public string Place { get; set; }
        public string ContactPhone { get; set; }
        public string ContactEmail { get; set; }
        public int EventCategoryId { get; set; }

        
    }
}