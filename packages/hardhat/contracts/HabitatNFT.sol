// SPDX-License-Identifier: MIT

pragma solidity ^0.8.12;

import "@openzeppelin/contracts/access/Ownable.sol";
import "./SingleOwnershipSoulbound.sol";
import "./NFTree.sol";
import "./interfaces/IERC4883.sol";
import "./interfaces/IERC6551Registry.sol";
import "./DonationEASResolver.sol";

contract HabitatNFT is Ownable, SingleOwnershipSoulbound, IERC4883 {
    string public constant baseSVG = '<svg width="1260" height="580" viewBox="0 0 1260 580" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1260 528.839H0V580H1260V528.839Z" fill="#7C4D29"/><path d="M102.649 543.636C102.649 547.376 97.5089 550.407 91.1683 550.407H67.4064C61.0657 550.407 55.9276 547.376 55.9276 543.636C55.9276 539.895 61.0657 536.864 67.4064 536.864H91.1683C97.5089 536.864 102.649 539.896 102.649 543.636Z" fill="#56331B"/>   <path d="M1240.72 563.373C1240.72 567.113 1235.58 570.144 1229.24 570.144H1205.47C1199.14 570.144 1194 567.113 1194 563.373C1194 559.632 1199.14 556.601 1205.47 556.601H1229.24C1235.58 556.601 1240.72 559.633 1240.72 563.373Z" fill="#56331B"/><path d="M284.252 543.636C284.252 547.376 279.113 550.407 272.774 550.407H249.012C242.673 550.407 237.533 547.376 237.533 543.636C237.533 539.895 242.671 536.864 249.012 536.864H272.774C279.113 536.864 284.252 539.896 284.252 543.636Z" fill="#56331B"/><path d="M330.973 563.373C330.973 567.113 325.834 570.144 319.495 570.144H295.733C289.392 570.144 284.254 567.113 284.254 563.373C284.254 559.632 289.392 556.601 295.733 556.601H319.495C325.834 556.601 330.973 559.633 330.973 563.373Z" fill="#56331B"/><path d="M555.04 563.373C555.04 567.113 549.9 570.144 543.561 570.144H519.799C513.46 570.144 508.32 567.113 508.32 563.373C508.32 559.632 513.46 556.601 519.799 556.601H543.561C549.9 556.601 555.04 559.633 555.04 563.373Z" fill="#56331B"/><path d="M156.921 563.373C156.921 567.113 151.782 570.144 145.441 570.144H101.269C94.9288 570.144 89.7906 567.113 89.7906 563.373C89.7906 559.632 94.9288 556.601 101.269 556.601H145.441C151.782 556.601 156.921 559.633 156.921 563.373Z" fill="#56331B"/><path d="M863.994 543.636C863.994 547.376 858.856 550.407 852.514 550.407H828.752C822.41 550.407 817.271 547.376 817.271 543.636C817.271 539.895 822.41 536.864 828.752 536.864H852.514C858.856 536.864 863.994 539.896 863.994 543.636Z" fill="#56331B"/><path d="M736.664 563.373C736.664 567.113 731.524 570.144 725.183 570.144H681.011C674.669 570.144 669.531 567.113 669.531 563.373C669.531 559.632 674.669 556.601 681.011 556.601H725.183C731.524 556.601 736.664 559.633 736.664 563.373Z" fill="#56331B"/><path d="M637.598 543.636C637.598 547.376 632.459 550.407 626.12 550.407H581.948C575.607 550.407 570.468 547.376 570.468 543.636C570.468 539.895 575.607 536.864 581.948 536.864H626.12C632.459 536.864 637.598 539.896 637.598 543.636Z" fill="#56331B"/><path d="M434.439 550.408C434.439 554.148 429.299 557.178 422.96 557.178H378.788C372.448 557.178 367.31 554.148 367.31 550.408C367.31 546.667 372.448 543.636 378.788 543.636H422.96C429.299 543.636 434.439 546.668 434.439 550.408Z" fill="#56331B"/><path d="M1020.7 543.636C1020.7 547.376 1015.56 550.407 1009.22 550.407H985.459C979.12 550.407 973.982 547.376 973.982 543.636C973.982 539.895 979.12 536.864 985.459 536.864H1009.22C1015.56 536.864 1020.7 539.896 1020.7 543.636Z" fill="#56331B"/><path d="M1067.42 563.373C1067.42 567.113 1062.28 570.144 1055.94 570.144H1032.18C1025.84 570.144 1020.7 567.113 1020.7 563.373C1020.7 559.632 1025.84 556.601 1032.18 556.601H1055.94C1062.28 556.601 1067.42 559.633 1067.42 563.373Z" fill="#56331B"/><path d="M1170.89 550.408C1170.89 554.148 1165.75 557.178 1159.41 557.178H1115.23C1108.9 557.178 1103.76 554.148 1103.76 550.408C1103.76 546.667 1108.9 543.636 1115.23 543.636H1159.41C1165.75 543.636 1170.89 546.668 1170.89 550.408Z" fill="#56331B"/><path d="M1260 516.223H0V528.839H1260V516.223Z" fill="#56331B"/><path d="M1260 505.613H0V518.229H1260V505.613Z" fill="#7FC62E"/><rect width="1260" height="504" fill="#E1EDF0"/><path d="M413.971 156.278C413.971 168.87 403.9 179.077 391.478 179.077H331.495C319.072 179.077 309 168.87 309 156.278V138.8C309 126.209 319.071 116.001 331.495 116.001H391.477C403.899 116.001 413.97 126.209 413.97 138.8V156.278H413.971Z" fill="#279DC1"/><path d="M331.495 116C319.324 116 309.416 125.8 309.021 138.038C309.416 150.276 319.323 160.077 331.495 160.077H391.477C403.647 160.077 413.554 150.276 413.95 138.038C413.554 125.8 403.647 116 391.477 116H331.495Z" fill="#4DAFD6"/><path d="M368.046 141.459C368.046 143.977 366.032 146.019 363.547 146.019H347.428C344.944 146.019 342.929 143.977 342.929 141.459C342.929 138.94 344.943 136.9 347.428 136.9H363.547C366.032 136.9 368.046 138.94 368.046 141.459Z" fill="#73D2EF"/><path d="M348.177 127.4C348.177 129.917 346.705 131.96 344.886 131.96H333.098C331.28 131.96 329.807 129.917 329.807 127.4C329.807 124.882 331.281 122.841 333.098 122.841H344.886C346.705 122.84 348.177 124.881 348.177 127.4Z" fill="#73D2EF"/><path d="M996.961 110.125C996.961 137.255 975.037 159.249 947.993 159.249C920.948 159.249 899.024 137.255 899.024 110.125C899.024 82.9942 920.948 61 947.993 61C975.037 61 996.961 82.9932 996.961 110.125Z" fill="#FFE236"/><path d="M936.135 97.1483C936.135 99.236 934.465 100.928 932.406 100.928H919.044C916.984 100.928 915.316 99.236 915.316 97.1483C915.316 95.0606 916.984 93.3672 919.044 93.3672H932.406C934.465 93.3672 936.135 95.0606 936.135 97.1483Z" fill="#FFF2BD"/><path d="M952.915 114.786C952.915 116.874 951.245 118.567 949.186 118.567H935.824C933.765 118.567 932.096 116.874 932.096 114.786C932.096 112.699 933.766 111.005 935.824 111.005H949.186C951.245 111.005 952.915 112.699 952.915 114.786Z" fill="#FFF2BD"/><path d="M957.731 87.0681C957.731 89.1568 956.51 90.8492 955.004 90.8492H945.233C943.726 90.8492 942.506 89.1568 942.506 87.0681C942.506 84.9815 943.726 83.2881 945.233 83.2881H955.004C956.511 83.2881 957.731 84.9815 957.731 87.0681Z" fill="#FFF2BD"/><path d="M917.973 146.157C917.973 156.593 909.625 165.055 899.328 165.055H798.645C788.348 165.055 780 156.593 780 146.157V104.58C780 94.1427 788.348 85.6827 798.645 85.6827H899.327C909.624 85.6827 917.972 94.1427 917.972 104.58V146.157H917.973Z" fill="#279DC1"/><path d="M899.328 85.6837H798.645C788.348 85.6837 780 94.1437 780 104.581V124.739C780 135.176 788.348 143.638 798.645 143.638H899.327C909.624 143.638 917.972 135.176 917.972 124.739V104.58C917.973 94.1437 909.624 85.6837 899.328 85.6837Z" fill="#4DAFD6"/><path d="M809.677 114.66C809.677 116.748 808.007 118.44 805.949 118.44H792.586C790.526 118.44 788.858 116.748 788.858 114.66C788.858 112.573 790.527 110.879 792.586 110.879H805.949C808.007 110.88 809.677 112.574 809.677 114.66Z" fill="#73D2EF"/><path d="M826.457 132.297C826.457 134.386 824.787 136.078 822.727 136.078H809.365C807.306 136.078 805.637 134.386 805.637 132.297C805.637 130.211 807.306 128.517 809.365 128.517H822.727C824.787 128.518 826.457 130.212 826.457 132.297Z" fill="#73D2EF"/><path d="M831.273 104.58C831.273 106.669 830.053 108.361 828.546 108.361H818.775C817.269 108.361 816.048 106.669 816.048 104.58C816.048 102.494 817.268 100.801 818.775 100.801H828.546C830.053 100.801 831.273 102.494 831.273 104.58Z" fill="#73D2EF"/><path d="M979.242 162.398C979.242 174.903 969.242 185.041 956.904 185.041H897.331C884.993 185.041 874.99 174.903 874.99 162.398V145.039C874.99 132.534 884.993 122.396 897.331 122.396H956.904C969.242 122.396 979.242 132.533 979.242 145.039V162.398Z" fill="#279DC1"/><path d="M897.331 122.396C885.242 122.396 875.403 132.13 875.01 144.284C875.403 156.438 885.242 166.171 897.331 166.171H956.904C968.99 166.171 978.83 156.438 979.222 144.284C978.829 132.129 968.99 122.396 956.904 122.396H897.331Z" fill="#4DAFD6"/><path d="M933.632 147.68C933.632 150.18 931.632 152.209 929.163 152.209H913.154C910.686 152.209 908.687 150.181 908.687 147.68C908.687 145.179 910.686 143.152 913.154 143.152H929.163C931.632 143.152 933.632 145.18 933.632 147.68Z" fill="#73D2EF"/><path d="M913.899 133.718C913.899 136.218 912.436 138.247 910.63 138.247H898.923C897.117 138.247 895.654 136.219 895.654 133.718C895.654 131.217 897.117 129.19 898.923 129.19H910.63C912.436 129.189 913.899 131.217 913.899 133.718Z" fill="#73D2EF"/>';

    IERC6551Registry private immutable ERC_6551_REGISTRY;
    address private immutable ERC_6551_IMPL;
    uint256 private immutable CHAIN = block.chainid;
    address public immutable donationResolver;
    uint256 public constant pointsDecimals = 18;

    NFTree public nftree;
    mapping(uint256 => address) public erc6551Accounts;
    mapping(address => uint256) public greenPoints;

    modifier onlyResolver() {
        require(_msgSender() == donationResolver, "Only registered EAS Resolver allowed");
        _;
    }
    
    modifier onlyNFTree() {
        require(_msgSender() == address(nftree), "Only NFTree allowed");
        _;
    }

    constructor(address _resolver, address _6551Registry, address _6551Impl) SingleOwnershipSoulbound("Habitat NFT", "HAB") Ownable() {
        donationResolver = _resolver;
        ERC_6551_REGISTRY = IERC6551Registry(_6551Registry);
        ERC_6551_IMPL = _6551Impl;
        // DonationEASResolver(payable(donationResolver)).setHabitatNFT(address(this));
    }

    function setNFTree(address _nftree) public onlyOwner {
        nftree = NFTree(_nftree);
    }

    function grantGreenPoints(address recipient, uint256 amount) external onlyResolver {
        require(balanceOf(recipient) > 0, "Recipient must own a Habitat NFT");
        greenPoints[recipient] += amount;
    }

    function burnGreenPoints(address owner, uint256 amount) external onlyNFTree {
        require(greenPoints[owner] >= amount, "Not enough points to burn");
        greenPoints[owner] -= amount;
    }

    function renderTokenById(uint256 id) external view override returns (string memory) {
        address account = erc6551Accounts[id];
        uint256 treeCount = nftree.balanceOf(account);
        string memory svg = baseSVG;
        for (uint i = 0; i < treeCount; i++) {
            uint256 treeId = nftree.tokenOfOwnerByIndex(account, i);
            string memory treeSvg = nftree.renderTokenById(treeId);
            svg = string.concat(svg, treeSvg);
        }
        svg = string.concat(svg, "</svg>");
        return svg;
    }

    function renderTokenByOwner(address owner) external view returns (string memory) {
        uint256 id = tokenOfOwnerByIndex(owner, 0);
        address account = erc6551Accounts[id];
        uint256 treeCount = nftree.balanceOf(account);
        string memory svg = baseSVG;
        for (uint i = 0; i < treeCount; i++) {
            uint256 treeId = nftree.tokenOfOwnerByIndex(account, i);
            string memory treeSvg = nftree.renderTokenById(treeId);
            svg = string.concat(svg, treeSvg);
        }
        svg = string.concat(svg, "</svg>");
        return svg;
    }

    function mint() public override ifNoBalance(_msgSender()) {
        uint256 newId = totalSupply();
        super.mint();
        erc6551Accounts[newId] = ERC_6551_REGISTRY.createAccount(
            ERC_6551_IMPL,
            block.chainid,
            address(this),
            newId,
            0,
            ""
        );
    }
}
