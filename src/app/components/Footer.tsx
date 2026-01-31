import logoIcon from "../../assets/Logo.png";

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-12">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-8">
          <div className="flex items-center gap-3">
            <img src={logoIcon} alt="Miftari Optical" className="h-14 w-14" />
            <div>
              <div className="font-bold text-lg bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Miftari Optical
              </div>
              <div className="text-sm text-gray-500">
                Independent Optical Excellence
              </div>
            </div>
          </div>

          <div className="flex gap-12 text-sm">
            <div>
              <div className="font-medium mb-2 text-gray-900">Kosovo</div>
              <div className="text-gray-600">
                Rr. Mbretrësha Teute p.n
                <br />
                Mitrovicë, 40 000
              </div>
            </div>
            <div>
              <div className="font-medium mb-2 text-gray-900">Sweden</div>
              <div className="text-gray-600">Active Market</div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-500">
            © {new Date().getFullYear()} Miftari Optical. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm text-gray-500">
            <span>Kosovo • Sweden</span>
            <span>•</span>
            <span>B2C & B2B Services</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
