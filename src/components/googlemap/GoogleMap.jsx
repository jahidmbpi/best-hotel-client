import { Map, Marker } from "pigeon-maps";

const GoogleMap = () => {
  return (
    <div className="w-full h-[500px] p-[20px]">
      <Map height="100%" defaultCenter={[50.879, 4.6997]} defaultZoom={11}>
        <Marker width={100} anchor={[50.879, 4.6997]} />
      </Map>
    </div>
  );
};

export default GoogleMap;
