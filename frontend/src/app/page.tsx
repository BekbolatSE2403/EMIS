import { EmergencyProfile } from "../components/emergency-profile";
import { demoProfile } from "../lib/demo-profile";

export default function Home() {
  return <EmergencyProfile patient={demoProfile} />;
}
