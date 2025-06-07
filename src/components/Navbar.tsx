export function NavLink({ href, active, children }: any) {
    return (
        <a
            href={href}
            className="relative group inline-block px-1 py-2 text-sm font-medium transition-colors duration-300"
        >
            <span className={`block ${active ? 'text-indigo-600' : 'text-gray-700'}`}>
            {children}
            </span>
            <span
            className={`absolute border w-14 border-indigo-600 left-0 h-0.5 bg-indigo-600 transform origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100 ${
                active ? 'scale-x-100' : ''
            }`}
            ></span>
        </a>
    );
}
export function MobileNavLink({ href, active, onClick, children }:any) {
    return (
        <a 
            href={href}
            onClick={onClick}
            className={`block px-3 py-2 rounded-md text-base font-medium ${
            active ? 'bg-indigo-100 text-indigo-700' : 'text-gray-700 hover:bg-gray-100'
            }`}
        >
            {children}
        </a>
    );
}