import { AlertDialogDemo } from '../DashboardFolder/ShowDialog/ShowDialog';
import Search from '../search/Search'
import { RxAvatar } from "react-icons/rx";

export const NavBar = () => {
    return (
        <div className='max-w-full m-5'>
            <header className='w-full flex justify-between item-center  '>
                <Search />
                <AlertDialogDemo btnText='LogOut' title='See You Later' desc='Are you sure you want to sign out of your account?' link=''/>
            </header>
        </div>
    )
}

