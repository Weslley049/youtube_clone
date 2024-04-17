import { PiHouseLight } from "react-icons/pi";
import { SiYoutubeshorts } from "react-icons/si";
import { PiUserSquareThin } from "react-icons/pi";
import { VscHistory } from "react-icons/vsc";
import { CgPlayList } from "react-icons/cg";
import { RiVideoLine } from "react-icons/ri";
import { GoLightBulb } from "react-icons/go";
import { MdAccessTime } from "react-icons/md";
import { BiLike } from "react-icons/bi";
import { BsFire } from "react-icons/bs";
import { FiShoppingBag } from "react-icons/fi";
import { PiMusicNoteThin } from "react-icons/pi";
import { BiMovie } from "react-icons/bi";
import { CiStreamOn } from "react-icons/ci";
import { BiJoystick } from "react-icons/bi";
import { FaRegNewspaper } from "react-icons/fa6";
import { IoTrophyOutline } from "react-icons/io5";
import { MdOutlinePodcasts } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { IoFlagOutline } from "react-icons/io5";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { MdOutlineFeedback } from "react-icons/md";
import { MdOutlineSubscriptions } from "react-icons/md";
import { TbBrandYoutubeKids } from "react-icons/tb";
import { SiYoutubemusic } from "react-icons/si";
import { SiYoutubestudio } from "react-icons/si";
import { ImYoutube } from "react-icons/im";
import { CiYoutube } from "react-icons/ci";
import { BsPlusCircle } from "react-icons/bs";

export const optionsSideBar = {
        'principal': [
            {
                name: 'Início',
                icon: <PiHouseLight size={20}/>
            },
            {
                name: 'Shorts',
                icon: <SiYoutubeshorts size={20}/>
            },   {
                name: 'Inscrições', 
                icon: <MdOutlineSubscriptions  size={20}/>
            },   
        ],
        'Você': [
            {
                name: 'Seu canal',
                icon: <PiUserSquareThin size={25}/>
            },
            {
                name: 'Histórico',
                icon: <VscHistory  size={20}/>
            },   {
                name: 'Playlists', 
                icon: <CgPlayList  size={25}/>
            },
            {
                name: 'Seus vídeos',
                icon: <RiVideoLine  size={25}/>
            },
            {
                name: 'Seus cursos',
                icon: <GoLightBulb  size={20}/>
            },   {
                name: 'Assistir mais tarde', 
                icon: <MdAccessTime  size={20}/>
            }, {
                name: `Vídeos como "Gostei"`,
                icon: <BiLike size={20}/>
            },
        ],
        'Inscrições': [],
        'Explorar': [
            {
                name: 'Em alta',
                icon: <BsFire size={25}/>
            },
            {
                name: 'Shopping',
                icon: <FiShoppingBag  size={20}/>
            },   {
                name: 'Música', 
                icon: <PiMusicNoteThin  size={25}/>
            },
            {
                name: 'Filmes',
                icon: <BiMovie size={25}/>
            },
            {
                name: 'Ao vivo',
                icon: <CiStreamOn  size={25}/>
            },   {
                name: 'Jogos', 
                icon: <BiJoystick  size={20}/>
            }, {
                name: `Notícias`,
                icon: <FaRegNewspaper size={20}/>
            },
            {
                name: 'Esportes', 
                icon: <IoTrophyOutline  size={20}/>
            }, {
                name: `Cursos`,
                icon: <GoLightBulb size={20}/>
            },
            {
                name: `Podcasts`,
                icon: <MdOutlinePodcasts size={20}/>
            },
        ],
        'Mais do youtube': [
       
            {
                name: 'Youtube Premium', 
                icon: <ImYoutube color='red' size={20}/>
            },
            {
                name: 'Youtube Studio', 
                icon: <SiYoutubestudio color='red' size={20}/>
            }, 
            {
                name: `Youtube Music`,
                icon: <SiYoutubemusic color="red" size={20}/>
            },
            {
                name: `Youtube Kids`,
                icon: <TbBrandYoutubeKids color='red' size={20}/>
            },
        ],
        'configs': [
            {
                name: 'Configurações', 
                icon: <IoSettingsOutline  size={25}/>
            }, {
                name: `Denúncias`,
                icon: <IoFlagOutline size={25}/>
            },
            {
                name: `Ajuda`,
                icon: <IoIosHelpCircleOutline size={25}/>
            },
            {
                name: `Enviar feedback`,
                icon: <MdOutlineFeedback size={25}/>
            },
        ],
}

export const optionsSideBarResponsive = [
    {
        name: 'Início',
        icon: <PiHouseLight size={20}/>
    },
    {
        name: 'Shorts',
        icon: <SiYoutubeshorts size={20}/>
    },
    {
        name: 'Inscrições', 
        icon: <MdOutlineSubscriptions  size={20}/>
    },
    {
        name: 'Você', 
        icon: <CiYoutube  size={20}/>
        
    }

]

export const FooterOptions = [
    {
        name: 'Início',
        icon: <PiHouseLight size={20}/>
    },
    {
        name: 'Shorts',
        icon: <SiYoutubeshorts size={20}/>
    },
    {
        name: '',
        icon: <BsPlusCircle size={30} />
    },
    {
        name: 'Inscrições', 
        icon: <MdOutlineSubscriptions  size={20}/>
    },
]

export const aditionalInfos = [
    'Sobre',
    'Imprensa',
    'Direitos autorais',
    'Entre em contato',
    'Criadores de conteúdo',
    'Publicidade',
    'Desenvolvedores',
    'Termos',
    'Privacidade',
    'Política e segurança',
    'Como funciona o YouTube',
    'Testar os novos recursos',
]
