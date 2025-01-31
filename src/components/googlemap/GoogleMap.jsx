import { Map, Marker } from "pigeon-maps";

const GoogleMap = () => {
  return (
    <div className="mt-[100px]">
      <div className="space-y-[10px]">
        <h2 className="text-4xl font-bold capitalize text-center">
          our hotel located
        </h2>
        <p className="text-center">
          Opal Blossom Inn- Easily find your preferred hotel through Google
          Maps! <br />
          Use our interactive map to view nearby hotels, verify locations, and{" "}
          <br />
          make easy bookings. Take advantage of our reliable location-based{" "}
          <br />
          services to make your journey even more memorable!
        </p>
      </div>
      <div className="w-full h-[500px] p-[20px]">
        <Map height="100%" defaultCenter={[50.879, 4.6997]} defaultZoom={11}>
          <Marker width={100} anchor={[50.879, 4.6997]} />
        </Map>
      </div>
    </div>
  );
};

export default GoogleMap;
