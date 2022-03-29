import background from "./img/site-background.jpg"
const Modifier = () => {

    return ( 
        <div  style={{backgroundImage: `url(${background})` ,height:"100vh"}} className="bg-cover w-screen p-4 ">

        <div   className="m-4 p-4 h-4/5  scrollbar overflow-auto bg-white shadow-md  shadow-gray-500/75   border border-gary-400 rounded-xl  h-1/2">
        {/* <div className="  scrollbar overflow-auto  shadow-md  shadow-gray-500/75   border border-gary-400 rounded-xl "> */}
            <table className="w-full border-gray-300  border-solid">
                <thead className="bg-gray-300  border-2   ">
                    <th className=" text-center py-3 px-2">Num Port</th>
                    <th className=" text-center py-3 px-2">IP Vlan</th>
                    <th className=" text-center py-3 px-2">Type</th>
                    <th className=" text-center lg:block  md:hidden py-3 px-2">Entre</th>
                    <th className=" text-center  py-3 px-2">Cascade</th>
                    <th className=" text-center py-3 px-2">Cascade</th>
                    <th  className=" text-center py-3 px-2">Emplacement</th>
                </thead>
                <tbody>
                    <tr style={{backgroundImage: `url(${background})`}} className="bg-white m-2 border border-2 border-b-solid" >
                        <td className="  text-center py-2 px-2  "> <span className=" px-2 py-1 rounded-lg bg-gray-300">1</span> </td>
                        <td className=" text-center  py-1  px-2 "> <input type="text"  className="px-2 py-1 w-full border rounded-full" /></td>
                        <td className="  text-center  py-1  px-2"> <input type="text"  className="px-2 py-1 w-full border rounded-full" /></td>
                        <td className="   px-2 lg:block  md:hidden text-center  py-1 "> <input type="text"  className="px-2 py-1 text w-full border rounded-full" /></td>
                        <td className="  text-center  py-1  px-2"> <input type="text"  className="px-2 py-1 w-full border rounded-full" /></td>
                        <td className="  text-center  py-1  px-2 "> <input type="text"  className="px-2 py-1 w-full border rounded-full" /></td>
                        <td className="  text-center  py-1  px-2"> <input type="text"  className="px-2 py-1 w-full border rounded-full" /></td>
                    </tr>
                     <tr style={{backgroundImage: `url(${background})`}} className="bg-white m-2 border border-2 border-b-solid" >
                        <td className="  text-center py-2 px-2  "> <span className=" px-2 py-1 rounded-lg bg-gray-300">1</span> </td>
                        <td className=" text-center  py-1  px-2 "> <input type="text"  className="px-2 py-1 w-full border rounded-full" /></td>
                        <td className="  text-center  py-1  px-2"> <input type="text"  className="px-2 py-1 w-full border rounded-full" /></td>
                        <td className="   px-2 lg:block  md:hidden text-center  py-1 "> <input type="text"  className="px-2 py-1 text w-full border rounded-full" /></td>
                        <td className="  text-center  py-1  px-2"> <input type="text"  className="px-2 py-1 w-full border rounded-full" /></td>
                        <td className="  text-center  py-1  px-2 "> <input type="text"  className="px-2 py-1 w-full border rounded-full" /></td>
                        <td className="  text-center  py-1  px-2"> <input type="text"  className="px-2 py-1 w-full border rounded-full" /></td>
                    </tr>
                     <tr style={{backgroundImage: `url(${background})`}} className="bg-white m-2 border border-2 border-b-solid" >
                        <td className="  text-center py-2 px-2  "> <span className=" px-2 py-1 rounded-lg bg-gray-300">1</span> </td>
                        <td className=" text-center  py-1  px-2 "> <input type="text"  className="px-2 py-1 w-full border rounded-full" /></td>
                        <td className="  text-center  py-1  px-2"> <input type="text"  className="px-2 py-1 w-full border rounded-full" /></td>
                        <td className="   px-2 lg:block  md:hidden text-center  py-1 "> <input type="text"  className="px-2 py-1 text w-full border rounded-full" /></td>
                        <td className="  text-center  py-1  px-2"> <input type="text"  className="px-2 py-1 w-full border rounded-full" /></td>
                        <td className="  text-center  py-1  px-2 "> <input type="text"  className="px-2 py-1 w-full border rounded-full" /></td>
                        <td className="  text-center  py-1  px-2"> <input type="text"  className="px-2 py-1 w-full border rounded-full" /></td>
                    </tr>
                     <tr style={{backgroundImage: `url(${background})`}} className="bg-white m-2 border border-2 border-b-solid" >
                        <td className="  text-center py-2 px-2  "> <span className=" px-2 py-1 rounded-lg bg-gray-300">1</span> </td>
                        <td className=" text-center  py-1  px-2 "> <input type="text"  className="px-2 py-1 w-full border rounded-full" /></td>
                        <td className="  text-center  py-1  px-2"> <input type="text"  className="px-2 py-1 w-full border rounded-full" /></td>
                        <td className="   px-2 lg:block  md:hidden text-center  py-1 "> <input type="text"  className="px-2 py-1 text w-full border rounded-full" /></td>
                        <td className="  text-center  py-1  px-2"> <input type="text"  className="px-2 py-1 w-full border rounded-full" /></td>
                        <td className="  text-center  py-1  px-2 "> <input type="text"  className="px-2 py-1 w-full border rounded-full" /></td>
                        <td className="  text-center  py-1  px-2"> <input type="text"  className="px-2 py-1 w-full border rounded-full" /></td>
                    </tr>
                     <tr style={{backgroundImage: `url(${background})`}} className="bg-white m-2 border border-2 border-b-solid" >
                        <td className="  text-center py-2 px-2  "> <span className=" px-2 py-1 rounded-lg bg-gray-300">1</span> </td>
                        <td className=" text-center  py-1  px-2 "> <input type="text"  className="px-2 py-1 w-full border rounded-full" /></td>
                        <td className="  text-center  py-1  px-2"> <input type="text"  className="px-2 py-1 w-full border rounded-full" /></td>
                        <td className="   px-2 lg:block  md:hidden text-center  py-1 "> <input type="text"  className="px-2 py-1 text w-full border rounded-full" /></td>
                        <td className="  text-center  py-1  px-2"> <input type="text"  className="px-2 py-1 w-full border rounded-full" /></td>
                        <td className="  text-center  py-1  px-2 "> <input type="text"  className="px-2 py-1 w-full border rounded-full" /></td>
                        <td className="  text-center  py-1  px-2"> <input type="text"  className="px-2 py-1 w-full border rounded-full" /></td>
                    </tr>
                     <tr style={{backgroundImage: `url(${background})`}} className="bg-white m-2 border border-2 border-b-solid" >
                        <td className="  text-center py-2 px-2  "> <span className=" px-2 py-1 rounded-lg bg-gray-300">1</span> </td>
                        <td className=" text-center  py-1  px-2 "> <input type="text"  className="px-2 py-1 w-full border rounded-full" /></td>
                        <td className="  text-center  py-1  px-2"> <input type="text"  className="px-2 py-1 w-full border rounded-full" /></td>
                        <td className="   px-2 lg:block  md:hidden text-center  py-1 "> <input type="text"  className="px-2 py-1 text w-full border rounded-full" /></td>
                        <td className="  text-center  py-1  px-2"> <input type="text"  className="px-2 py-1 w-full border rounded-full" /></td>
                        <td className="  text-center  py-1  px-2 "> <input type="text"  className="px-2 py-1 w-full border rounded-full" /></td>
                        <td className="  text-center  py-1  px-2"> <input type="text"  className="px-2 py-1 w-full border rounded-full" /></td>
                    </tr>
                     <tr style={{backgroundImage: `url(${background})`}} className="bg-white m-2 border border-2 border-b-solid" >
                        <td className="  text-center py-2 px-2  "> <span className=" px-2 py-1 rounded-lg bg-gray-300">1</span> </td>
                        <td className=" text-center  py-1  px-2 "> <input type="text"  className="px-2 py-1 w-full border rounded-full" /></td>
                        <td className="  text-center  py-1  px-2"> <input type="text"  className="px-2 py-1 w-full border rounded-full" /></td>
                        <td className="   px-2 lg:block  md:hidden text-center  py-1 "> <input type="text"  className="px-2 py-1 text w-full border rounded-full" /></td>
                        <td className="  text-center  py-1  px-2"> <input type="text"  className="px-2 py-1 w-full border rounded-full" /></td>
                        <td className="  text-center  py-1  px-2 "> <input type="text"  className="px-2 py-1 w-full border rounded-full" /></td>
                        <td className="  text-center  py-1  px-2"> <input type="text"  className="px-2 py-1 w-full border rounded-full" /></td>
                    </tr>
                     <tr style={{backgroundImage: `url(${background})`}} className="bg-white m-2 border border-2 border-b-solid" >
                        <td className="  text-center py-2 px-2  "> <span className=" px-2 py-1 rounded-lg bg-gray-300">1</span> </td>
                        <td className=" text-center  py-1  px-2 "> <input type="text"  className="px-2 py-1 w-full border rounded-full" /></td>
                        <td className="  text-center  py-1  px-2"> <input type="text"  className="px-2 py-1 w-full border rounded-full" /></td>
                        <td className="   px-2 lg:block  md:hidden text-center  py-1 "> <input type="text"  className="px-2 py-1 text w-full border rounded-full" /></td>
                        <td className="  text-center  py-1  px-2"> <input type="text"  className="px-2 py-1 w-full border rounded-full" /></td>
                        <td className="  text-center  py-1  px-2 "> <input type="text"  className="px-2 py-1 w-full border rounded-full" /></td>
                        <td className="  text-center  py-1  px-2"> <input type="text"  className="px-2 py-1 w-full border rounded-full" /></td>
                    </tr>
                     <tr style={{backgroundImage: `url(${background})`}} className="bg-white m-2 border border-2 border-b-solid" >
                        <td className="  text-center py-2 px-2  "> <span className=" px-2 py-1 rounded-lg bg-gray-300">1</span> </td>
                        <td className=" text-center  py-1  px-2 "> <input type="text"  className="px-2 py-1 w-full border rounded-full" /></td>
                        <td className="  text-center  py-1  px-2"> <input type="text"  className="px-2 py-1 w-full border rounded-full" /></td>
                        <td className="   px-2 lg:block  md:hidden text-center  py-1 "> <input type="text"  className="px-2 py-1 text w-full border rounded-full" /></td>
                        <td className="  text-center  py-1  px-2"> <input type="text"  className="px-2 py-1 w-full border rounded-full" /></td>
                        <td className="  text-center  py-1  px-2 "> <input type="text"  className="px-2 py-1 w-full border rounded-full" /></td>
                        <td className="  text-center  py-1  px-2"> <input type="text"  className="px-2 py-1 w-full border rounded-full" /></td>
                    </tr>
                     <tr style={{backgroundImage: `url(${background})`}} className="bg-white m-2 border border-2 border-b-solid" >
                        <td className="  text-center py-2 px-2  "> <span className=" px-2 py-1 rounded-lg bg-gray-300">1</span> </td>
                        <td className=" text-center  py-1  px-2 "> <input type="text"  className="px-2 py-1 w-full border rounded-full" /></td>
                        <td className="  text-center  py-1  px-2"> <input type="text"  className="px-2 py-1 w-full border rounded-full" /></td>
                        <td className="   px-2 lg:block  md:hidden text-center  py-1 "> <input type="text"  className="px-2 py-1 text w-full border rounded-full" /></td>
                        <td className="  text-center  py-1  px-2"> <input type="text"  className="px-2 py-1 w-full border rounded-full" /></td>
                        <td className="  text-center  py-1  px-2 "> <input type="text"  className="px-2 py-1 w-full border rounded-full" /></td>
                        <td className="  text-center  py-1  px-2"> <input type="text"  className="px-2 py-1 w-full border rounded-full" /></td>
                    </tr>
                     <tr style={{backgroundImage: `url(${background})`}} className="bg-white m-2 border border-2 border-b-solid" >
                        <td className="  text-center py-2 px-2  "> <span className=" px-2 py-1 rounded-lg bg-gray-300">1</span> </td>
                        <td className=" text-center  py-1  px-2 "> <input type="text"  className="px-2 py-1 w-full border rounded-full" /></td>
                        <td className="  text-center  py-1  px-2"> <input type="text"  className="px-2 py-1 w-full border rounded-full" /></td>
                        <td className="   px-2 lg:block  md:hidden text-center  py-1 "> <input type="text"  className="px-2 py-1 text w-full border rounded-full" /></td>
                        <td className="  text-center  py-1  px-2"> <input type="text"  className="px-2 py-1 w-full border rounded-full" /></td>
                        <td className="  text-center  py-1  px-2 "> <input type="text"  className="px-2 py-1 w-full border rounded-full" /></td>
                        <td className="  text-center  py-1  px-2"> <input type="text"  className="px-2 py-1 w-full border rounded-full" /></td>
                    </tr>
                     <tr style={{backgroundImage: `url(${background})`}} className="bg-white m-2 border border-2 border-b-solid" >
                        <td className="  text-center py-2 px-2  "> <span className=" px-2 py-1 rounded-lg bg-gray-300">1</span> </td>
                        <td className=" text-center  py-1  px-2 "> <input type="text"  className="px-2 py-1 w-full border rounded-full" /></td>
                        <td className="  text-center  py-1  px-2"> <input type="text"  className="px-2 py-1 w-full border rounded-full" /></td>
                        <td className="   px-2 lg:block  md:hidden text-center  py-1 "> <input type="text"  className="px-2 py-1 text w-full border rounded-full" /></td>
                        <td className="  text-center  py-1  px-2"> <input type="text"  className="px-2 py-1 w-full border rounded-full" /></td>
                        <td className="  text-center  py-1  px-2 "> <input type="text"  className="px-2 py-1 w-full border rounded-full" /></td>
                        <td className="  text-center  py-1  px-2"> <input type="text"  className="px-2 py-1 w-full border rounded-full" /></td>
                    </tr>
                     <tr style={{backgroundImage: `url(${background})`}} className="bg-white m-2 border border-2 border-b-solid" >
                        <td className="  text-center py-2 px-2  "> <span className=" px-2 py-1 rounded-lg bg-gray-300">1</span> </td>
                        <td className=" text-center  py-1  px-2 "> <input type="text"  className="px-2 py-1 w-full border rounded-full" /></td>
                        <td className="  text-center  py-1  px-2"> <input type="text"  className="px-2 py-1 w-full border rounded-full" /></td>
                        <td className="   px-2 lg:block  md:hidden text-center  py-1 "> <input type="text"  className="px-2 py-1 text w-full border rounded-full" /></td>
                        <td className="  text-center  py-1  px-2"> <input type="text"  className="px-2 py-1 w-full border rounded-full" /></td>
                        <td className="  text-center  py-1  px-2 "> <input type="text"  className="px-2 py-1 w-full border rounded-full" /></td>
                        <td className="  text-center  py-1  px-2"> <input type="text"  className="px-2 py-1 w-full border rounded-full" /></td>
                    </tr>
                     <tr style={{backgroundImage: `url(${background})`}} className="bg-white m-2 border border-2 border-b-solid" >
                        <td className="  text-center py-2 px-2  "> <span className=" px-2 py-1 rounded-lg bg-gray-300">1</span> </td>
                        <td className=" text-center  py-1  px-2 "> <input type="text"  className="px-2 py-1 w-full border rounded-full" /></td>
                        <td className="  text-center  py-1  px-2"> <input type="text"  className="px-2 py-1 w-full border rounded-full" /></td>
                        <td className="   px-2 lg:block  md:hidden text-center  py-1 "> <input type="text"  className="px-2 py-1 text w-full border rounded-full" /></td>
                        <td className="  text-center  py-1  px-2"> <input type="text"  className="px-2 py-1 w-full border rounded-full" /></td>
                        <td className="  text-center  py-1  px-2 "> <input type="text"  className="px-2 py-1 w-full border rounded-full" /></td>
                        <td className="  text-center  py-1  px-2"> <input type="text"  className="px-2 py-1 w-full border rounded-full" /></td>
                    </tr>
                     <tr style={{backgroundImage: `url(${background})`}} className="bg-white m-2 border border-2 border-b-solid" >
                        <td className="  text-center py-2 px-2  "> <span className=" px-2 py-1 rounded-lg bg-gray-300">1</span> </td>
                        <td className=" text-center  py-1  px-2 "> <input type="text"  className="px-2 py-1 w-full border rounded-full" /></td>
                        <td className="  text-center  py-1  px-2"> <input type="text"  className="px-2 py-1 w-full border rounded-full" /></td>
                        <td className="   px-2 lg:block  md:hidden text-center  py-1 "> <input type="text"  className="px-2 py-1 text w-full border rounded-full" /></td>
                        <td className="  text-center  py-1  px-2"> <input type="text"  className="px-2 py-1 w-full border rounded-full" /></td>
                        <td className="  text-center  py-1  px-2 "> <input type="text"  className="px-2 py-1 w-full border rounded-full" /></td>
                        <td className="  text-center  py-1  px-2"> <input type="text"  className="px-2 py-1 w-full border rounded-full" /></td>
                    </tr>
                     <tr style={{backgroundImage: `url(${background})`}} className="bg-white m-2 border border-2 border-b-solid" >
                        <td className="  text-center py-2 px-2  "> <span className=" px-2 py-1 rounded-lg bg-gray-300">1</span> </td>
                        <td className=" text-center  py-1  px-2 "> <input type="text"  className="px-2 py-1 w-full border rounded-full" /></td>
                        <td className="  text-center  py-1  px-2"> <input type="text"  className="px-2 py-1 w-full border rounded-full" /></td>
                        <td className="   px-2 lg:block  md:hidden text-center  py-1 "> <input type="text"  className="px-2 py-1 text w-full border rounded-full" /></td>
                        <td className="  text-center  py-1  px-2"> <input type="text"  className="px-2 py-1 w-full border rounded-full" /></td>
                        <td className="  text-center  py-1  px-2 "> <input type="text"  className="px-2 py-1 w-full border rounded-full" /></td>
                        <td className="  text-center  py-1  px-2"> <input type="text"  className="px-2 py-1 w-full border rounded-full" /></td>
                    </tr>
                     <tr style={{backgroundImage: `url(${background})`}} className="bg-white m-2 border border-2 border-b-solid" >
                        <td className="  text-center py-2 px-2  "> <span className=" px-2 py-1 rounded-lg bg-gray-300">1</span> </td>
                        <td className=" text-center  py-1  px-2 "> <input type="text"  className="px-2 py-1 w-full border rounded-full" /></td>
                        <td className="  text-center  py-1  px-2"> <input type="text"  className="px-2 py-1 w-full border rounded-full" /></td>
                        <td className="   px-2 lg:block  md:hidden text-center  py-1 "> <input type="text"  className="px-2 py-1 text w-full border rounded-full" /></td>
                        <td className="  text-center  py-1  px-2"> <input type="text"  className="px-2 py-1 w-full border rounded-full" /></td>
                        <td className="  text-center  py-1  px-2 "> <input type="text"  className="px-2 py-1 w-full border rounded-full" /></td>
                        <td className="  text-center  py-1  px-2"> <input type="text"  className="px-2 py-1 w-full border rounded-full" /></td>
                    </tr>
                     <tr style={{backgroundImage: `url(${background})`}} className="bg-white m-2 border border-2 border-b-solid" >
                        <td className="  text-center py-2 px-2  "> <span className=" px-2 py-1 rounded-lg bg-gray-300">1</span> </td>
                        <td className=" text-center  py-1  px-2 "> <input type="text"  className="px-2 py-1 w-full border rounded-full" /></td>
                        <td className="  text-center  py-1  px-2"> <input type="text"  className="px-2 py-1 w-full border rounded-full" /></td>
                        <td className="   px-2 lg:block  md:hidden text-center  py-1 "> <input type="text"  className="px-2 py-1 text w-full border rounded-full" /></td>
                        <td className="  text-center  py-1  px-2"> <input type="text"  className="px-2 py-1 w-full border rounded-full" /></td>
                        <td className="  text-center  py-1  px-2 "> <input type="text"  className="px-2 py-1 w-full border rounded-full" /></td>
                        <td className="  text-center  py-1  px-2"> <input type="text"  className="px-2 py-1 w-full border rounded-full" /></td>
                    </tr>
                     <tr style={{backgroundImage: `url(${background})`}} className="bg-white m-2 border border-2 border-b-solid" >
                        <td className="  text-center py-2 px-2  "> <span className=" px-2 py-1 rounded-lg bg-gray-300">1</span> </td>
                        <td className=" text-center  py-1  px-2 "> <input type="text"  className="px-2 py-1 w-full border rounded-full" /></td>
                        <td className="  text-center  py-1  px-2"> <input type="text"  className="px-2 py-1 w-full border rounded-full" /></td>
                        <td className="   px-2 lg:block  md:hidden text-center  py-1 "> <input type="text"  className="px-2 py-1 text w-full border rounded-full" /></td>
                        <td className="  text-center  py-1  px-2"> <input type="text"  className="px-2 py-1 w-full border rounded-full" /></td>
                        <td className="  text-center  py-1  px-2 "> <input type="text"  className="px-2 py-1 w-full border rounded-full" /></td>
                        <td className="  text-center  py-1  px-2"> <input type="text"  className="px-2 py-1 w-full border rounded-full" /></td>
                    </tr>
                     <tr style={{backgroundImage: `url(${background})`}} className="bg-white m-2 border border-2 border-b-solid" >
                        <td className="  text-center py-2 px-2  "> <span className=" px-2 py-1 rounded-lg bg-gray-300">1</span> </td>
                        <td className=" text-center  py-1  px-2 "> <input type="text"  className="px-2 py-1 w-full border rounded-full" /></td>
                        <td className="  text-center  py-1  px-2"> <input type="text"  className="px-2 py-1 w-full border rounded-full" /></td>
                        <td className="   px-2 lg:block  md:hidden text-center  py-1 "> <input type="text"  className="px-2 py-1 text w-full border rounded-full" /></td>
                        <td className="  text-center  py-1  px-2"> <input type="text"  className="px-2 py-1 w-full border rounded-full" /></td>
                        <td className="  text-center  py-1  px-2 "> <input type="text"  className="px-2 py-1 w-full border rounded-full" /></td>
                        <td className="  text-center  py-1  px-2"> <input type="text"  className="px-2 py-1 w-full border rounded-full" /></td>
                    </tr>
                     <tr style={{backgroundImage: `url(${background})`}} className="bg-white m-2 border border-2 border-b-solid" >
                        <td className="  text-center py-2 px-2  "> <span className=" px-2 py-1 rounded-lg bg-gray-300">1</span> </td>
                        <td className=" text-center  py-1  px-2 "> <input type="text"  className="px-2 py-1 w-full border rounded-full" /></td>
                        <td className="  text-center  py-1  px-2"> <input type="text"  className="px-2 py-1 w-full border rounded-full" /></td>
                        <td className="   px-2 lg:block  md:hidden text-center  py-1 "> <input type="text"  className="px-2 py-1 text w-full border rounded-full" /></td>
                        <td className="  text-center  py-1  px-2"> <input type="text"  className="px-2 py-1 w-full border rounded-full" /></td>
                        <td className="  text-center  py-1  px-2 "> <input type="text"  className="px-2 py-1 w-full border rounded-full" /></td>
                        <td className="  text-center  py-1  px-2"> <input type="text"  className="px-2 py-1 w-full border rounded-full" /></td>
                    </tr>
                     <tr style={{backgroundImage: `url(${background})`}} className="bg-white m-2 border border-2 border-b-solid" >
                        <td className="  text-center py-2 px-2  "> <span className=" px-2 py-1 rounded-lg bg-gray-300">1</span> </td>
                        <td className=" text-center  py-1  px-2 "> <input type="text"  className="px-2 py-1 w-full border rounded-full" /></td>
                        <td className="  text-center  py-1  px-2"> <input type="text"  className="px-2 py-1 w-full border rounded-full" /></td>
                        <td className="   px-2 lg:block  md:hidden text-center  py-1 "> <input type="text"  className="px-2 py-1 text w-full border rounded-full" /></td>
                        <td className="  text-center  py-1  px-2"> <input type="text"  className="px-2 py-1 w-full border rounded-full" /></td>
                        <td className="  text-center  py-1  px-2 "> <input type="text"  className="px-2 py-1 w-full border rounded-full" /></td>
                        <td className="  text-center  py-1  px-2"> <input type="text"  className="px-2 py-1 w-full border rounded-full" /></td>
                    </tr>
                     <tr style={{backgroundImage: `url(${background})`}} className="bg-white m-2 border border-2 border-b-solid" >
                        <td className="  text-center py-2 px-2  "> <span className=" px-2 py-1 rounded-lg bg-gray-300">1</span> </td>
                        <td className=" text-center  py-1  px-2 "> <input type="text"  className="px-2 py-1 w-full border rounded-full" /></td>
                        <td className="  text-center  py-1  px-2"> <input type="text"  className="px-2 py-1 w-full border rounded-full" /></td>
                        <td className="   px-2 lg:block  md:hidden text-center  py-1 "> <input type="text"  className="px-2 py-1 text w-full border rounded-full" /></td>
                        <td className="  text-center  py-1  px-2"> <input type="text"  className="px-2 py-1 w-full border rounded-full" /></td>
                        <td className="  text-center  py-1  px-2 "> <input type="text"  className="px-2 py-1 w-full border rounded-full" /></td>
                        <td className="  text-center  py-1  px-2"> <input type="text"  className="px-2 py-1 w-full border rounded-full" /></td>
                    </tr> */}

                    </tbody>
                    </table>
                {/* </div> */}

        </div>
        </div>
     );
}
 
export default Modifier;