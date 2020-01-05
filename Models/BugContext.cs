using Microsoft.EntityFrameworkCore;

namespace BugTracker.Models
{
    public class BugContext : DbContext
    {
        public BugContext(DbContextOptions<BugContext> options)
            : base(options)
        {
        }

        public DbSet<Bug> BugItems { get; set; }
    }
}