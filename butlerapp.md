     {/* Butlerapp Course Table - Ultra Modern Design */}
        <div className="w-full bg-white/80 backdrop-blur-xl border border-gray-100/50 rounded-3xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_40px_rgb(0,0,0,0.08)] transition-all duration-500">
          <div className="mb-6">
            <h3 className="text-lg font-medium text-gray-900 mb-1">Book Your Course</h3>
            <p className="text-sm text-gray-500">Select your preferred dates and modules</p>
          </div>
          
          <div className="websail">
            <wscourselist 
              className="ws-element" 
              fcourses="ethics_as_strategy"
              data-ftagsnot="intern"
              data-columns="course,place,price,from,to,info,infolink,remaining,booklink"
              data-fixed-columns="course,place,booklink"
            ></wscourselist>
          </div>
        </div>
      </div>
