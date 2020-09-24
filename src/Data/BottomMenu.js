import CartScreen from '@screen/CartScreen';
import AccountScreen from '@screen/AccountScreen';
import OfficialStoreScreen from '@screen/OfficialStoreScreen';
import HomeScreen from '@screen/HomeScreen';
// import FeedStack from '@stack/FeedStack';
// import LoginScreen from '@screen/LoginScreen';
import HeaderRoot from '@screen/HeaderRoot';

export const BottomMenu = [
  {name: 'Home', label: 'Home', icon: 'home', component: HomeScreen},
  {
    name: 'Feed',
    label: 'Feed',
    icon: 'signature-image',
    component: HeaderRoot,
  },
  {
    name: 'OfficialStore',
    label: 'Official Store',
    icon: 'store',
    component: OfficialStoreScreen,
  },
  {name: 'Cart', label: 'Keranjang', icon: 'cart', component: CartScreen},
  {name: 'Akun', label: 'Home', icon: 'account', component: AccountScreen},
];
