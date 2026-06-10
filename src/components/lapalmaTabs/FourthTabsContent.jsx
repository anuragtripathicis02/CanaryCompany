import { Link } from "react-router-dom"


const FourthTabsContent = () => {
  return (
    <div className="tabs-content-box">
        <h2>Family vacation</h2>
        <div className="content-details-box">
            <div className="text-img-sdjust-box">
                <p>Due to its diversity and its varied excursion possibilities, La Palma is an ideal destination for families. It doesn't matter if you are competing in sandcastle building on a beach day, watching dolphins and whales in their natural habitat on a boat trip or getting an insight into the secrets of the universe on a visit to the observatory, boredom is a foreign word on the island!</p>
                <p>In the well-equipped visitor centers, young and old guests can learn about the volcanic past of La Palma, its flora and fauna and its vast interconnected hiking trail system.</p>
                <p>La Palma offers a variety of interesting indoor activities like a visit to one of its many museums: Natural History, Silk, Cigar, Banana, Volcano, Maritime.</p>
                <p>Another rewarding excursion destination is Puerto Naos: the ecological banana finca <Link className="light-blue" to=""> <strong>  Platanologico </strong></Link>,where you can learn about the natural cultivation of this popular fruit and where children can get in touch with farm animals like sheep, goats, donkeys, peacocks.</p>
            </div>
        </div>
    </div>
  )
}

export default FourthTabsContent