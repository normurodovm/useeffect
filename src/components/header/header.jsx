import Logo from './img/logo-img.png'
export const Header = () => {
    return <div className="bg-white w-[100%] h-auto flex items-center justify-around flex-col">
        <div className='flex items-center justify-around w-[90%]'>
            <div className='flex items-center gap-8'>
                <img src={Logo} alt="" />
                <h2 className='w-36 '>
                    Колбасы и мясные деликатесы
                </h2>
            </div>
            <div className='header__iconka flex items-center justify-center gap-4'>
                <svg className='header__iconw-6 h-6 hover:w-7 hover:h-7 transition-all' width={23} height={22} viewBox="0 0 23 22" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.5 3.55143L13.6563 7.93571L14.0156 8.72143L14.7969 8.83929L19.6094 9.53857L16.1875 12.9171L15.6016 13.4907L15.7422 14.2764L16.5625 19.0929L12.2578 16.8221L11.5 16.5L10.7734 16.885L6.46875 19.1243L7.25 14.3079L7.39063 13.5221L6.8125 12.9171L3.35938 9.49929L8.17188 8.8L8.95313 8.68214L9.3125 7.89643L11.5 3.55143ZM11.5 0L7.94531 7.24429L0 8.39929L5.75 14.0407L4.39063 22L11.5 18.2443L18.6094 22L17.25 14.0407L23 8.40714L15.0547 7.24429L11.5 0Z" fill="#0E2149" />
                </svg>
                <div className='w-[190px] h-[40px]  flex items-center justify-center gap-6'>
                    <svg width="23" height="21" viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.5 0L4.18436 7.50928H0V12.5683H1.02679L3.31118 20.3938L3.49107 21H19.5089L19.6888 20.3938L21.9732 12.5683H23V7.50928H18.8156L11.5 0ZM11.5 2.39798L16.4803 7.50928H6.5205L11.5 2.39798ZM1.64286 9.19562H21.3571V10.882H20.7411L20.5612 11.4882L18.2768 19.3137H4.72321L2.43882 11.4882L2.25893 10.882H1.64286V9.19562ZM7.39286 11.7251V17.6273H9.03571V11.7251H7.39286ZM10.6786 11.7251V17.6273H12.3214V11.7251H10.6786ZM13.9643 11.7251V17.6273H15.6071V11.7251H13.9643Z" fill="#0E2149" />
                    </svg>
                    <h2 className='header__text w-20'>
                        Товаров: 3 <span className='header__span text-base font-medium'>6 540 ₽</span></h2>
                </div>

            </div>
        </div>
        <div className='header__bottom  w-[100%] h-[40px] flex bg-blue-950 items-center justify-center gap-40'>
            <ul className='flex w-[500px] gap-8 items-center font-bold text-white text-base'>
                <li>
                    <a href="">О ресноте </a>
                </li>
                <li>
                    <a href="">Каталог</a>
                </li>
                <li>
                    <a href="">Наши магазины</a>
                </li>
                <li>
                    <a href="">Контакты</a>
                </li>
            </ul>
            <label className='w-[280px] flex items-center h-[40px] bg-blue-900 justify-between' >
                <input className='header__input  ml-5 bg-blue-900  border-none' type="text" placeholder='Поиск по сайту' />
                <svg className='mr-2' width={19} height={19} viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 16C9.77498 15.9996 11.4988 15.4054 12.897 14.312L17.293 18.708L18.707 17.294L14.311 12.898C15.405 11.4997 15.9996 9.77544 16 8C16 3.589 12.411 0 8 0C3.589 0 0 3.589 0 8C0 12.411 3.589 16 8 16ZM8 2C11.309 2 14 4.691 14 8C14 11.309 11.309 14 8 14C4.691 14 2 11.309 2 8C2 4.691 4.691 2 8 2Z" fill="white" />
                </svg>

            </label>
        </div>
    </div>
}