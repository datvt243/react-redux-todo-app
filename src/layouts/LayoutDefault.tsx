import Header from './_Header';
import Footer from './_Footer';

interface iProps {
    children: React.ReactElement;
}
function LayoutDefault({ children }: iProps) {
    return (
        <div className="body-wrapper" id="body-wrapper">
            <Header />
            <main className="main-wrapper">{children}</main>
            <Footer />
        </div>
    );
}

export default LayoutDefault;
