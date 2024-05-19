import { Link } from '@nextui-org/react';
import UnminedMap from '../components/UnminedMap';

export default function Map() {
    return (
        <div>

                <UnminedMap></UnminedMap>

            <p>Map courtesy of <Link href="https://unmined.net/">uNmINeD</Link></p>
        </div>
    );
}

