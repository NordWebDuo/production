import Layout from "@/components/Layout";
import TitleDesc from "@/components/PageTitle";
import { Dropdown, Select, TextInput } from "flowbite-react";

function GetStarted() {
    return(
        <Layout pageTitle={"Choose a package"}>
             <div className="hero-section-alternative"></div>

<TitleDesc
  Title="Choose a package"
  PageDescription="We are a dynamic team comprised of talented designers, developers, and marketing experts. "
/>

        <div className="container lg:w-[800px] mx-auto mt-14">
            
            <div className="package_form gap-2 flex-col flex">
              <TextInput label="Name" placeholder="Your name" />
             <TextInput label="Email" placeholder="Your email" />
            <TextInput label="Phone" placeholder="Your phone" />
            </div>
            
            </div>
            
        </Layout>
    )
}

export default GetStarted;