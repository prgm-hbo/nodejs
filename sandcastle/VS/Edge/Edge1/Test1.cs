using System.Threading;
using System.Threading.Tasks;

namespace Test
{
    public class Test1
    {
        public int Wait(int s)
        {
            Thread.Sleep(s * 1000);
            await Task.Delay(1000);
            return 0;
        }
    }
}