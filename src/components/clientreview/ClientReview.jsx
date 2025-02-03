const ClientReview = () => {
  return (
    <div className="w-full mx-auto p-6 mt-[100px] mb-[50px]">
      <h2 className="text-2xl font-bold text-center mb-6">Client Reviews</h2>

      <div className="grid gap-6 md:grid-cols-4 w-full">
        {/* First Review */}
        <div className="p-4 border rounded-xl shadow-lg">
          <div className="flex items-center gap-2 mb-2">
            <span className="font-bold text-lg">Mahin Rahman</span>
            <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
          </div>
          <p className="text-gray-600">
            Amazing experience! The location was perfect! The room was clean and
            comfortable, and the staff was very friendly. The food was also
            great. Definitely coming back!
          </p>
        </div>

        {/* Second Review */}
        <div className="p-4 border rounded-xl shadow-lg">
          <div className="flex items-center gap-2 mb-2">
            <span className="font-bold text-lg">Sabina Sultana</span>
            <span className="text-yellow-500">⭐⭐⭐⭐☆</span>
          </div>
          <p className="text-gray-600">
            Good, but room for improvement! The hotel is nice, especially the
            location. However, room service could be a bit faster. Overall, a
            good stay.
          </p>
        </div>

        {/* Third Review */}
        <div className="p-4 border rounded-xl shadow-lg">
          <div className="flex items-center gap-2 mb-2">
            <span className="font-bold text-lg">Tanvir Ahmed</span>
            <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
          </div>
          <p className="text-gray-600">
            A truly luxurious experience! The hotel is equipped with modern
            facilities. The swimming pool and spa were fantastic. A great place
            to stay with family.
          </p>
        </div>

        {/* Fourth Review */}
        <div className="p-4 border rounded-xl shadow-lg">
          <div className="flex items-center gap-2 mb-2">
            <span className="font-bold text-lg">Rafi Islam</span>
            <span className="text-yellow-500">⭐⭐⭐☆☆</span>
          </div>
          <p className="text-gray-600">
            An average experience. The hotel looks great, but there was a slight
            odor in the room. The breakfast menu could have more variety.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ClientReview;
