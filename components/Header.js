import {
    BadgeCheckIcon,
    CollectionIcon,
    HomeIcon,
    LightningBoltIcon,
    SearchIcon,
    UserIcon
} from "@heroicons/react/outline"
import Image from 'next/image'
import HeaderItem from './HeaderItem'
function Header() {
    return (
            <header className="flex flex-col sm:flex-row m-2 justify-between items-center h-auto">
            <div className="flex flex-grow justify-evenly max-w-2xl">
                <HeaderItem Icon={HomeIcon} title="Home"/>
                <HeaderItem Icon={LightningBoltIcon} title="Trending"/>
                <HeaderItem Icon={BadgeCheckIcon} title="Verified"/>
                <HeaderItem Icon={CollectionIcon} title="Collection"/>
                <HeaderItem Icon={SearchIcon} title="Search"/>
                <HeaderItem Icon={UserIcon} title="Account"/>
            </div>
            <a href="/">
            <Image src="https://links.papareact.com/ua6" width={200} height={100} />
            </a>
            </header>
    )
}

export default Header
