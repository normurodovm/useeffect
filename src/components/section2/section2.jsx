export const Section2 = () => {
    return <div className="section-title w-[100%] h-[100vh]  flex items-center justify-center">
        <div className="drction__container w-[90%] h-auto  flex items-center justify-between flex-col">
            <ul className="section__item flex gap-10  ">
                <li className=" section__list w-[103px] h-[49px] bg-slate-200 flex items-center justify-center">
                    <a href="">Хиты</a>
                    </li>
                <li className="section__list w-[103px] h-[49px] bg-slate-100 flex items-center justify-center">
                    <a href="">Скидки</a>
                    </li>
                <li className="section__list w-[103px] h-[49px] bg-slate-200 flex items-center justify-center">
                    <a href="">Новинки</a>
                    </li>
            </ul>
            <div className="w-[80%] h-[492px] bg-yellow-500">

            </div>
        </div>
    </div>
}