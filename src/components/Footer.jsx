const Header = () => {
    return (
        <div className="footer py-4">
            <div className="container-fluid text-center">
                <p>
                    Copyright &copy;
                    <script data-cfasync="false"
                            src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script>
                    <script>document.write(new Date().getFullYear());</script>
                    All rights reserved | This template is made with <i className="icon-heart-o"
                                                                        aria-hidden="true"></i> by <a
                    href="https://nikosdrosakis.gr"  rel="noreferrer"  target="_blank">NikDrosakis</a>
                </p>
            </div>
        </div>
    );
}

export default Header;