import { MapView } from '@aws-amplify/ui-react-geo';
import '@aws-amplify/ui-react-geo/styles.css';
import "./App.css"

export default function AppOld2() {
    return (
        <MapView
        initialViewState={{
            latitude: 37.8,
            longitude: -122.4,
            zoom: 14,
        }}
        />
    )
}
