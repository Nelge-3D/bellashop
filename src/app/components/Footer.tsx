import { FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa'
import Image from 'next/image'
import Link from 'next/link'

export const Footer = () => {
  return (
    <footer className="bg-neutral-800 text-gray-200 px-6 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-sm">
        {/* Catégorie */}
        <div>
          <h3 className="text-white font-bold mb-4 uppercase tracking-wider">Catégorie</h3>
          <ul className="space-y-2">
            <li><Link href="#">Parapharmacie</Link></li>
            <li><Link href="#">Maquillage & Ongles</Link></li>
            <li><Link href="#">Cheveux</Link></li>
            <li><Link href="#">Visage et Corps</Link></li>
            <li><Link href="#">Parfums</Link></li>
            <li><Link href="#">Enfants</Link></li>
            <li><Link href="#">Hommes</Link></li>
          </ul>
        </div>

        {/* Service Client */}
        <div>
          <h3 className="text-white font-bold mb-4 uppercase tracking-wider">Service client</h3>
          <ul className="space-y-2">
            <li><Link href="#">Comment commander ?</Link></li>
            <li><Link href="#">Livraisons</Link></li>
            <li><Link href="#">Conditions de retour</Link></li>
            <li><Link href="#">Conditions générales de vente</Link></li>
            <li><Link href="#">Contactez le service client</Link></li>
            <li><Link href="#">Fabellashop en Côte d’Ivoire</Link></li>
          </ul>
        </div>

        {/* Mon Compte */}
        <div>
          <h3 className="text-white font-bold mb-4 uppercase tracking-wider">Mon compte</h3>
          <ul className="space-y-2">
            <li><Link href="#">Mon compte</Link></li>
            <li><Link href="#">Mon panier</Link></li>
            <li><Link href="#">Mes commandes</Link></li>
          </ul>
        </div>

        {/* Aide + Réseaux */}
        <div>
          <h3 className="text-white font-bold mb-4 uppercase tracking-wider">Besoin d’aide ?</h3>
          <p className="mb-4">Suivez-nous sur :</p>
          <div className="flex gap-4 mb-4">
            <a href="#" aria-label="Facebook"><FaFacebookF className="text-white hover:text-red-500" /></a>
            <a href="#" aria-label="Instagram"><FaInstagram className="text-white hover:text-red-500" /></a>
            <a href="#" aria-label="TikTok"><FaTiktok className="text-white hover:text-red-500" /></a>
          </div>
          <p className="mb-2">
            Contactez-nous au <br />
            <span className="font-medium text-white">+221 78 107 52 52</span> ou <br />
            <span className="font-medium text-white">+221 33 867 22 32</span><br />
            de 9h à 16h du Lundi au Vendredi<br />
            et les Samedis de 9h à 14h.
          </p>
          <div className="mt-4">
            <p className="uppercase font-semibold text-white mb-2 text-sm">Télécharger l’appli</p>
            <div className="flex gap-2">
              <Image src="/appstore.png" alt="App Store" width={100} height={30} />
              <Image src="/googleplay.png" alt="Google Play" width={100} height={30} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
