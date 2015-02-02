using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(BDEvents24.Startup))]
namespace BDEvents24
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
