import { PrimaryButton } from "../ui/Buttons"

const Cta = ()=>{
    return(
        <section id="cta" className="bg-gradient-to-r from-indigo to-red">
        <div className="container flex flex-col items-center justify-between px-6 py-12 space-y-4 mx-auto md:flex-row md:space-y-0">
            <h2 className="font-bold text-2xl leading-tight text-center md:text-4xl md:fl">
  Enhance sales reputation with our platform.
            </h2>
            <div>
                <PrimaryButton>
Get Started  
                </PrimaryButton>
            </div>
        </div>
    </section>
    )
}
export default Cta