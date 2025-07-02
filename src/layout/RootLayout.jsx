import { Outlet } from 'react-router-dom'




const RootLayout = () => {
    return (
        <div >
            <div className=" ">
                <Outlet />
            </div>
        </div>
    )
}


export default RootLayout