import GoogleMapReact from 'google-map-react';
import MapMarkerSVG from 'public/icons/map-marker.svg';

const Marker = (props) => (
  <MapMarkerSVG className="w-10 h-auto" lat={props.lat} lng={props.lng} />
);
type props = {
  className?: string;
  children: React.ReactNode;
};

const ContactMap: React.FC<props> = function ({ className, children }) {
  const address = {
    center: {
      lat: 43.6004975,
      lng: 1.4182337,
    },
    zoom: 17,
  };

  return (
    // Important! Always set the container height explicitly
    <div className={className}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyDAHcAXUHrC3O-ZuCVWSqR2omIgwfRhzXo' }}
        defaultCenter={address.center}
        defaultZoom={address.zoom}
      >
        <Marker lat={address.center.lat} lng={address.center.lng} />
      </GoogleMapReact>
      {children}
    </div>
  );
};

export default ContactMap;
