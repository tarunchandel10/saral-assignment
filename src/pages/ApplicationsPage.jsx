
import MainLayout from "../layouts/MainLayout";

export default function ApplicationsPage() {
  
  return (
    <MainLayout>
 
      <div className="relative bg-white rounded-2xl border border-purple-200 p-12 overflow-hidden">
      
                {/* 🔥 Background grid effect */}
                <div className="absolute inset-0 opacity-20 bg-[linear-gradient(#f3e8ff_1px,transparent_1px),linear-gradient(90deg,#f3e8ff_1px,transparent_1px)] bg-[size:40px_40px]" />
      
                {/* Content */}
                <div className="relative z-10 text-center">
                  
                  <h1 className="text-3xl font-semibold text-purple-700">
                    Application Page
                  </h1>
      
                </div>
      
                {/* Cards */}
                <div className="relative z-10 mt-10 grid grid-cols-3 gap-6">
      
                  {/* Card 1 */}
                  <div className="bg-white border rounded-xl p-6 text-center shadow-sm">
                    <div className="w-12 h-12 mx-auto mb-4 bg-purple-100 text-purple-600 flex items-center justify-center rounded-xl text-xl">
                      <img src="/icon-one.png"  />
                    </div>
      
                    <h3 className="font-medium text-gray-800">
                      Reward Your Ambassadors
                    </h3>
      
                    <p className="text-sm text-gray-500 mt-2">
                      Boost campaign performance by setting up rewards for ambassadors
                    </p>
                  </div>
      
                  {/* Card 2 */}
                  <div className="bg-white border rounded-xl p-6 text-center shadow-sm">
                    <div className="w-12 h-12 mx-auto mb-4 bg-purple-100 text-purple-600 flex items-center justify-center rounded-xl text-xl">
                      <img src="/icon-two.png"  />
                    </div>
      
                    <h3 className="font-medium text-gray-800">
                      Set Milestones
                    </h3>
      
                    <p className="text-sm text-gray-500 mt-2">
                      Set up custom goals for sales, posts, or time-based achievements
                    </p>
                  </div>
      
                  {/* Card 3 */}
                  <div className="bg-white border rounded-xl p-6 text-center shadow-sm">
                    <div className="w-12 h-12 mx-auto mb-4 bg-purple-100 text-purple-600 flex items-center justify-center rounded-xl text-xl">
                      <img src="/icon-three.png"  />
                    </div>
      
                    <h3 className="font-medium text-gray-800">
                      Customise Incentives
                    </h3>
      
                    <p className="text-sm text-gray-500 mt-2">
                      Create custom incentives like flat fees, free products, or special commissions.
                    </p>
                  </div>
      
                </div>
              </div>
    </MainLayout>
  );
}