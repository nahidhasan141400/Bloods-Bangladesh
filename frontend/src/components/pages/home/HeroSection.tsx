/* eslint-disable @next/next/no-img-element */
import Button from "@/components/ui/Button"
import Container from "@/components/ui/Container"

const HeroSection = () => {
  return (
    <Container className="min-h-screen flex items-center justify-between">
      <div className="flex-1 flex flex-col gap-2 mb-40">
        <h1 className="text-6xl font-bold text-primary">Bloods Bangladesh</h1>
        <h4 className="text-3xl font-medium mb-5">Be the Reason Someone Smiles Today<br/> 
        Donate Blood and Save Lives.</h4>
        <Button className="w-fit">Become a Donor</Button>
      </div>

      <div className="flex-1 flex justify-end">
        <img className="w-fit h-fit object-fill" src="/images/hero.png" alt="hero" />
      </div>

    </Container>
  )
}

export default HeroSection
