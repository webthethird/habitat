import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

/**
 * Deploys a contract named "YourContract" using the deployer account and
 * constructor arguments set to the deployer address
 *
 * @param hre HardhatRuntimeEnvironment object.
 */
const deployYourContract: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  /*
    On localhost, the deployer account is the one that comes with Hardhat, which is already funded.

    When deploying to live networks (e.g `yarn deploy --network goerli`), the deployer account
    should have sufficient balance to pay for the gas fees for contract creation.

    You can generate a random account with `yarn generate` which will fill DEPLOYER_PRIVATE_KEY
    with a random private key in the .env file (then used on hardhat.config.ts)
    You can run the `yarn account` command to check your balance in every network.
  */
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  await deploy("HabitatNFT", {
    from: deployer,
    // Contract constructor arguments
    args: [
      `<svg width="741" height="580" viewBox="0 0 741 580" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M740.825 528.839H0V580H740.825V528.839Z" fill="#7C4D29"/>
      <path d="M60.353 543.636C60.353 547.376 57.331 550.407 53.603 550.407H39.632C35.904 550.407 32.883 547.376 32.883 543.636C32.883 539.895 35.904 536.864 39.632 536.864H53.603C57.331 536.864 60.353 539.896 60.353 543.636Z" fill="#56331B"/>
      <path d="M729.487 563.373C729.487 567.113 726.466 570.144 722.739 570.144H708.766C705.039 570.144 702.018 567.113 702.018 563.373C702.018 559.632 705.039 556.601 708.766 556.601H722.739C726.466 556.601 729.487 559.633 729.487 563.373Z" fill="#56331B"/>
      <path d="M167.128 543.636C167.128 547.376 164.106 550.407 160.379 550.407H146.408C142.681 550.407 139.659 547.376 139.659 543.636C139.659 539.895 142.68 536.864 146.408 536.864H160.379C164.106 536.864 167.128 539.896 167.128 543.636Z" fill="#56331B"/>
      <path d="M194.598 563.373C194.598 567.113 191.576 570.144 187.849 570.144H173.878C170.15 570.144 167.129 567.113 167.129 563.373C167.129 559.632 170.15 556.601 173.878 556.601H187.849C191.576 556.601 194.598 559.633 194.598 563.373Z" fill="#56331B"/>
      <path d="M326.339 563.373C326.339 567.113 323.317 570.144 319.59 570.144H305.619C301.892 570.144 298.87 567.113 298.87 563.373C298.87 559.632 301.892 556.601 305.619 556.601H319.59C323.317 556.601 326.339 559.633 326.339 563.373Z" fill="#56331B"/>
      <path d="M92.263 563.373C92.263 567.113 89.241 570.144 85.513 570.144H59.542C55.814 570.144 52.793 567.113 52.793 563.373C52.793 559.632 55.814 556.601 59.542 556.601H85.513C89.241 556.601 92.263 559.633 92.263 563.373Z" fill="#56331B"/>
      <path d="M507.991 543.636C507.991 547.376 504.97 550.407 501.241 550.407H487.27C483.541 550.407 480.52 547.376 480.52 543.636C480.52 539.895 483.541 536.864 487.27 536.864H501.241C504.97 536.864 507.991 539.896 507.991 543.636Z" fill="#56331B"/>
      <path d="M433.126 563.373C433.126 567.113 430.104 570.144 426.376 570.144H400.405C396.676 570.144 393.655 567.113 393.655 563.373C393.655 559.632 396.676 556.601 400.405 556.601H426.376C430.104 556.601 433.126 559.633 433.126 563.373Z" fill="#56331B"/>
      <path d="M374.88 543.636C374.88 547.376 371.858 550.407 368.131 550.407H342.16C338.432 550.407 335.41 547.376 335.41 543.636C335.41 539.895 338.432 536.864 342.16 536.864H368.131C371.858 536.864 374.88 539.896 374.88 543.636Z" fill="#56331B"/>
      <path d="M255.431 550.408C255.431 554.148 252.409 557.178 248.682 557.178H222.711C218.983 557.178 215.962 554.148 215.962 550.408C215.962 546.667 218.983 543.636 222.711 543.636H248.682C252.409 543.636 255.431 546.668 255.431 550.408Z" fill="#56331B"/>
      <path d="M600.128 543.636C600.128 547.376 597.107 550.407 593.378 550.407H579.407C575.68 550.407 572.659 547.376 572.659 543.636C572.659 539.895 575.68 536.864 579.407 536.864H593.378C597.106 536.864 600.128 539.896 600.128 543.636Z" fill="#56331B"/>
      <path d="M627.598 563.373C627.598 567.113 624.575 570.144 620.848 570.144H606.877C603.149 570.144 600.127 567.113 600.127 563.373C600.127 559.632 603.149 556.601 606.877 556.601H620.848C624.575 556.601 627.598 559.633 627.598 563.373Z" fill="#56331B"/>
      <path d="M688.43 550.408C688.43 554.148 685.409 557.178 681.68 557.178H655.709C651.982 557.178 648.961 554.148 648.961 550.408C648.961 546.667 651.982 543.636 655.709 543.636H681.68C685.409 543.636 688.43 546.668 688.43 550.408Z" fill="#56331B"/>
      <path d="M740.825 516.223H0V528.839H740.825V516.223Z" fill="#56331B"/>
      <path d="M740.825 505.613H0V518.229H740.825V505.613Z" fill="#7FC62E"/>
      <rect width="741" height="504" fill="#E1EDF0"/>
      <path d="M299.971 150.63C299.971 163.222 289.9 173.429 277.478 173.429H217.495C205.072 173.429 195 163.222 195 150.63V133.152C195 120.561 205.071 110.353 217.495 110.353H277.477C289.899 110.353 299.97 120.561 299.97 133.152V150.63H299.971Z" fill="#279DC1"/>
      <path d="M217.495 110.352C205.324 110.352 195.416 120.152 195.021 132.39C195.416 144.628 205.323 154.429 217.495 154.429H277.477C289.647 154.429 299.554 144.628 299.95 132.39C299.554 120.152 289.647 110.352 277.477 110.352H217.495Z" fill="#4DAFD6"/>
      <path d="M254.046 135.811C254.046 138.329 252.032 140.371 249.547 140.371H233.428C230.944 140.371 228.929 138.329 228.929 135.811C228.929 133.292 230.943 131.252 233.428 131.252H249.547C252.032 131.252 254.046 133.292 254.046 135.811Z" fill="#73D2EF"/>
      <path d="M234.177 121.752C234.177 124.269 232.705 126.312 230.886 126.312H219.098C217.28 126.312 215.807 124.269 215.807 121.752C215.807 119.234 217.281 117.193 219.098 117.193H230.886C232.705 117.192 234.177 119.233 234.177 121.752Z" fill="#73D2EF"/>
      <path d="M668.961 102.294C668.961 129.425 647.037 151.419 619.993 151.419C592.948 151.419 571.024 129.425 571.024 102.294C571.024 75.1637 592.948 53.1696 619.993 53.1696C647.037 53.1696 668.961 75.1627 668.961 102.294Z" fill="#FFE236"/>
      <path d="M608.135 89.3179C608.135 91.4056 606.465 93.098 604.406 93.098H591.044C588.984 93.098 587.316 91.4056 587.316 89.3179C587.316 87.2302 588.984 85.5368 591.044 85.5368H604.406C606.465 85.5368 608.135 87.2302 608.135 89.3179Z" fill="#FFF2BD"/>
      <path d="M624.915 106.955C624.915 109.044 623.245 110.736 621.186 110.736H607.824C605.765 110.736 604.096 109.044 604.096 106.955C604.096 104.868 605.766 103.175 607.824 103.175H621.186C623.245 103.175 624.915 104.868 624.915 106.955Z" fill="#FFF2BD"/>
      <path d="M629.731 79.2377C629.731 81.3264 628.51 83.0188 627.004 83.0188H617.233C615.726 83.0188 614.506 81.3264 614.506 79.2377C614.506 77.1511 615.726 75.4577 617.233 75.4577H627.004C628.511 75.4577 629.731 77.1511 629.731 79.2377Z" fill="#FFF2BD"/>
      <path d="M589.973 138.326C589.973 148.763 581.625 157.224 571.328 157.224H470.645C460.348 157.224 452 148.763 452 138.326V96.7496C452 86.3123 460.348 77.8523 470.645 77.8523H571.327C581.624 77.8523 589.972 86.3123 589.972 96.7496V138.326H589.973Z" fill="#279DC1"/>
      <path d="M571.328 77.8533H470.645C460.348 77.8533 452 86.3133 452 96.7506V116.909C452 127.345 460.348 135.807 470.645 135.807H571.327C581.624 135.807 589.972 127.345 589.972 116.909V96.7496C589.973 86.3133 581.624 77.8533 571.328 77.8533Z" fill="#4DAFD6"/>
      <path d="M481.677 106.83C481.677 108.917 480.007 110.61 477.949 110.61H464.586C462.526 110.61 460.858 108.917 460.858 106.83C460.858 104.742 462.527 103.049 464.586 103.049H477.949C480.007 103.05 481.677 104.743 481.677 106.83Z" fill="#73D2EF"/>
      <path d="M498.457 124.467C498.457 126.556 496.787 128.248 494.727 128.248H481.365C479.306 128.248 477.637 126.556 477.637 124.467C477.637 122.38 479.306 120.687 481.365 120.687H494.727C496.787 120.688 498.457 122.381 498.457 124.467Z" fill="#73D2EF"/>
      <path d="M503.273 96.7496C503.273 98.8383 502.053 100.531 500.546 100.531H490.775C489.269 100.531 488.048 98.8383 488.048 96.7496C488.048 94.664 489.268 92.9706 490.775 92.9706H500.546C502.053 92.9706 503.273 94.664 503.273 96.7496Z" fill="#73D2EF"/>
      <path d="M651.242 154.568C651.242 167.073 641.242 177.21 628.904 177.21H569.331C556.993 177.21 546.99 167.073 546.99 154.568V137.209C546.99 124.704 556.993 114.565 569.331 114.565H628.904C641.242 114.565 651.242 124.703 651.242 137.209V154.568Z" fill="#279DC1"/>
      <path d="M569.331 114.565C557.242 114.565 547.403 124.299 547.01 136.453C547.403 148.608 557.242 158.341 569.331 158.341H628.904C640.99 158.341 650.83 148.608 651.222 136.453C650.829 124.298 640.99 114.565 628.904 114.565H569.331Z" fill="#4DAFD6"/>
      <path d="M605.632 14.379 580.687 142.351 580.687 139.85C580.687 137.348 58239.85C605.632 142.35 603.632 144.379 601.163 144.379H585.154C582.686 14.686 135.322 585.154 135.322H601.163C603.632 135.322 605.632 137.349 605.632 139.85Z" fill="#73D2EF"/>
      <path d="M585.899 125.888C585.899 128.388 584.436 130.417 582.63 130.417H570.923C569.117 130.417 567.654 128.389 567.654 125.888C567.654 123.387 569.117 121.359 570.923 121.359H582.63C584.436 121.358 585.899 123.387 585.899 125.888Z" fill="#73D2EF"/>`,
    ],
    log: true,
    // autoMine: can be passed to the deploy function to make the deployment process faster on local networks by
    // automatically mining the contract deployment transaction. There is no effect on live networks.
    autoMine: true,
  });

  // Get the deployed contract
  // const yourContract = await hre.ethers.getContract("YourContract", deployer);
};

export default deployYourContract;

// Tags are useful if you have multiple deploy files and only want to run one of them.
// e.g. yarn deploy --tags YourContract
deployYourContract.tags = ["ERC721Soulbound"];
