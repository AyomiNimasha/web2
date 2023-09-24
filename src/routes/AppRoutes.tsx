import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";

import { Layout } from "@/components/layout/Layout";
import { Deals } from "@/pages/Deals";
import { EmbroideryCollection } from "@/pages/EmbroideryCollection";
import { Essentials } from "@/pages/Essentials";
import { GiftBox } from "@/pages/GiftBox";
import { GiftVoucher } from "@/pages/GiftVoucher";
import { Home } from "@/pages/Home";
import { KidsCollection } from "@/pages/KidsCollection";
import { Login } from "@/pages/Login";
import { NewIn } from "@/pages/NewIn";
import { ShopNow } from "@/pages/ShopNow";
import { CoOrds } from "@/pages/subpages-essentials/CoOrds";
import { KinitDresses } from "@/pages/subpages-essentials/KinitDresses";
import { Shorts } from "@/pages/subpages-essentials/Shorts";
import { Tshirst } from "@/pages/subpages-essentials/Tshirst";
import { Cardigans } from "@/pages/subpages-shopnow/Cardigans";
import { Jumpsuits } from "@/pages/subpages-shopnow/Jumpsuits";
import { MaxiDresses } from "@/pages/subpages-shopnow/MaxiDresses";
import { MidiDresses } from "@/pages/subpages-shopnow/MidiDresses";
import { MiniDresses } from "@/pages/subpages-shopnow/MiniDresses";
import { Pants } from "@/pages/subpages-shopnow/Pants";
import { Rompers } from "@/pages/subpages-shopnow/Rompers";
import { Skirts } from "@/pages/subpages-shopnow/Skirts";
import { Tops } from "@/pages/subpages-shopnow/Tops";
import { TwoPieceSets } from "@/pages/subpages-shopnow/TwoPieceSets";
import { Dresses } from "@/pages/subpageskidscollection/Dresses";
import { TravelWithWife } from "@/pages/TravelWithWife";
import { useAuth } from "@/state/auth";

function NonAuthedRoute() {
  const { isAuth } = useAuth();
  return isAuth ? <Outlet /> : <Navigate to="/" />;
}

function AuthedRoute() {
  const { isAuth } = useAuth();
  return !isAuth ? <Outlet /> : <Navigate to="/" />;
}

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthedRoute />}>
          <Route element={<Layout />}>
            <Route path="/" element={<NewIn />} />
            {/* route navbar elements */}
            <Route path="/newin" element={<NewIn />} />
            <Route path="/deals" element={<Deals />} />
            <Route path="/giftbox" element={<GiftBox />} />
            <Route path="/giftvoucher" element={<GiftVoucher />} />
            <Route path="/shopnow" element={<ShopNow />} />
            {/* route shop now sublinks */}
            <Route path="/shopnow/tops" element={<Tops />} />
            <Route path="/shopnow/pants" element={<Pants />} />
            <Route path="/shopnow/skirts" element={<Skirts />} />
            <Route path="/shopnow/minidresses" element={<MiniDresses />} />
            <Route path="/shopnow/rompers" element={<Rompers />} />
            <Route path="/shopnow/mididresses" element={<MidiDresses />} />
            <Route path="/shopnow/cardigans" element={<Cardigans />} />
            <Route path="/shopnow/maxidresses" element={<MaxiDresses />} />
            <Route path="/shopnow/jumpsuits" element={<Jumpsuits />} />
            <Route path="/shopnow/twopiece" element={<TwoPieceSets />} />
            <Route path="/essentials" element={<Essentials />} />
            {/* route essentials sublinks */}
            <Route path="/essentials/coords" element={<CoOrds />} />
            <Route path="/essentials/kinitdresses" element={<KinitDresses />} />
            <Route path="/essentials/shorts" element={<Shorts />} />
            <Route path="/essentials/tops" element={<Tops />} />
            <Route path="/essentials/tshirts" element={<Tshirst />} />
            <Route path="/kids" element={<KidsCollection />} />
            {/* route kids sublinks */}
            <Route path="/kids/dresses" element={<Dresses />} />
            <Route path="/kids/tops" element={<Tops />} />
            <Route path="/kids/twopiecesets" element={<TwoPieceSets />} />
            <Route path="/embroidery" element={<EmbroideryCollection />} />
            {/* route embroidery sublinks */}
            <Route path="/embroidery/mididresses" element={<MidiDresses />} />
            <Route path="/embroidery/maxidresses" element={<MaxiDresses />} />
            <Route path="/embroidery/tops" element={<Tops />} />
            <Route path="/embroidery/minidresses" element={<MiniDresses />} />
            <Route path="/embroidery/twopiecesets" element={<TwoPieceSets />} />

            <Route path="/travel" element={<TravelWithWife />} />
            {/* route embroidery sublinks */}
            <Route path="/travel/minidresses" element={<MiniDresses />} />
            <Route path="/travel/twopiecesets" element={<TwoPieceSets />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export { AppRoutes };
