import * as React from "react";
import Svg, { Path } from "react-native-svg";

const ShareBubble = (props) => (
    <Svg width="196" height="74" viewBox="0 0 196 74" fill="none" {...props} xmlns="http://www.w3.org/2000/svg">
        <Path fill-rule="evenodd" clip-rule="evenodd" d="M15 0C6.71573 0 0 6.71573 0 15V45C0 52.917 6.13348 59.4015 13.9079 59.9608L12 60L20.9608 73.0732L29.4508 60H181C189.284 60 196 53.2843 196 45V15C196 6.71573 189.284 0 181 0H15Z" fill="#629560" />
        <Path
            fill="#F1EFEF"
            d="M13.04 26V16.64H14.3985V24.7195H18.6365V26H13.04ZM19.2851 17.8295V16.51H20.6436V17.8295H19.2851ZM19.2851 26V18.98H20.6436V26H19.2851ZM22.004 26L22.0105 16.64H23.3885V22.36L26.1445 18.98H27.8735L24.9615 22.49L28.1725 26H26.3265L23.3885 22.62V26H22.004ZM31.2294 26.195C30.5318 26.195 29.9186 26.0433 29.3899 25.74C28.8656 25.4323 28.4561 25.0055 28.1614 24.4595C27.8711 23.9092 27.7259 23.2722 27.7259 22.5485C27.7259 21.7815 27.8689 21.1163 28.1549 20.553C28.4453 19.9897 28.8483 19.5542 29.3639 19.2465C29.8796 18.9388 30.4798 18.785 31.1644 18.785C31.8794 18.785 32.4883 18.9518 32.9909 19.2855C33.4936 19.6148 33.8684 20.085 34.1154 20.696C34.3668 21.307 34.4664 22.0328 34.4144 22.8735H33.0559V22.3795C33.0473 21.5648 32.8913 20.9625 32.5879 20.5725C32.2889 20.1825 31.8318 19.9875 31.2164 19.9875C30.5361 19.9875 30.0248 20.202 29.6824 20.631C29.3401 21.06 29.1689 21.6797 29.1689 22.49C29.1689 23.2613 29.3401 23.8593 29.6824 24.284C30.0248 24.7043 30.5188 24.9145 31.1644 24.9145C31.5891 24.9145 31.9553 24.8192 32.2629 24.6285C32.5749 24.4335 32.8176 24.1562 32.9909 23.7965L34.3234 24.219C34.0504 24.8473 33.6366 25.3348 33.0819 25.6815C32.5273 26.0238 31.9098 26.195 31.2294 26.195ZM28.7269 22.8735V21.814H33.7384V22.8735H28.7269ZM41.3223 26C40.8803 26.0867 40.447 26.1235 40.0223 26.1105C39.5976 26.0975 39.2185 26.0152 38.8848 25.8635C38.5511 25.7118 38.2998 25.4735 38.1308 25.1485C37.9791 24.8582 37.8968 24.5635 37.8838 24.2645C37.8751 23.9612 37.8708 23.6188 37.8708 23.2375V17.03H39.2358V23.1725C39.2358 23.4542 39.238 23.699 39.2423 23.907C39.251 24.115 39.2965 24.2905 39.3788 24.4335C39.5348 24.7022 39.7818 24.856 40.1198 24.895C40.4621 24.9297 40.863 24.9145 41.3223 24.8495V26ZM36.5253 20.072V18.98H41.3223V20.072H36.5253ZM47.1444 26V22.5485C47.1444 22.2755 47.1205 21.996 47.0729 21.71C47.0295 21.4197 46.9429 21.151 46.8129 20.904C46.6872 20.657 46.5074 20.4577 46.2734 20.306C46.0437 20.1543 45.7425 20.0785 45.3699 20.0785C45.1272 20.0785 44.8975 20.1197 44.6809 20.202C44.4642 20.28 44.2735 20.4078 44.1089 20.5855C43.9485 20.7632 43.8207 20.9972 43.7254 21.2875C43.6344 21.5778 43.5889 21.931 43.5889 22.347L42.7439 22.0285C42.7439 21.3915 42.863 20.8303 43.1014 20.345C43.3397 19.8553 43.682 19.474 44.1284 19.201C44.5747 18.928 45.1142 18.7915 45.7469 18.7915C46.2322 18.7915 46.6395 18.8695 46.9689 19.0255C47.2982 19.1815 47.5647 19.3873 47.7684 19.643C47.9764 19.8943 48.1345 20.1695 48.2429 20.4685C48.3512 20.7675 48.4249 21.06 48.4639 21.346C48.5029 21.632 48.5224 21.8833 48.5224 22.1V26H47.1444ZM42.2109 26V16.64H43.4264V21.6905H43.5889V26H42.2109ZM49.7604 17.8295V16.51H51.1189V17.8295H49.7604ZM49.7604 26V18.98H51.1189V26H49.7604ZM55.1704 26.1885C54.3167 26.1885 53.6212 26 53.0839 25.623C52.5465 25.246 52.2172 24.7152 52.0959 24.0305L53.4869 23.816C53.5735 24.18 53.7729 24.4682 54.0849 24.6805C54.4012 24.8885 54.7934 24.9925 55.2614 24.9925C55.686 24.9925 56.0175 24.9058 56.2559 24.7325C56.4985 24.5592 56.6199 24.3208 56.6199 24.0175C56.6199 23.8398 56.5765 23.6968 56.4899 23.5885C56.4075 23.4758 56.232 23.3697 55.9634 23.27C55.6947 23.1703 55.2852 23.0468 54.7349 22.8995C54.1325 22.7435 53.6537 22.5767 53.2984 22.399C52.9474 22.217 52.696 22.0068 52.5444 21.7685C52.397 21.5258 52.3234 21.2333 52.3234 20.891C52.3234 20.4663 52.436 20.0958 52.6614 19.7795C52.8867 19.4632 53.203 19.2183 53.6104 19.045C54.022 18.8717 54.503 18.785 55.0534 18.785C55.5907 18.785 56.0695 18.8695 56.4899 19.0385C56.9102 19.2075 57.2504 19.448 57.5104 19.76C57.7704 20.0677 57.9264 20.4295 57.9784 20.8455L56.5874 21.099C56.5397 20.761 56.3815 20.4945 56.1129 20.2995C55.8442 20.1045 55.4954 19.9983 55.0664 19.981C54.6547 19.9637 54.321 20.033 54.0654 20.189C53.8097 20.3407 53.6819 20.5508 53.6819 20.8195C53.6819 20.9755 53.7295 21.1077 53.8249 21.216C53.9245 21.3243 54.1152 21.4283 54.3969 21.528C54.6785 21.6277 55.0945 21.7468 55.6449 21.8855C56.2342 22.0372 56.7022 22.2062 57.0489 22.3925C57.3955 22.5745 57.6425 22.7933 57.7899 23.049C57.9415 23.3003 58.0174 23.6058 58.0174 23.9655C58.0174 24.6588 57.7639 25.2027 57.2569 25.597C56.7542 25.9913 56.0587 26.1885 55.1704 26.1885ZM60.8881 26V16.64H64.6711C64.7621 16.64 64.8748 16.6443 65.0091 16.653C65.1435 16.6573 65.2713 16.6703 65.3926 16.692C65.9126 16.7743 66.346 16.952 66.6926 17.225C67.0436 17.498 67.3058 17.8425 67.4791 18.2585C67.6525 18.6745 67.7391 19.1338 67.7391 19.6365C67.7391 20.3818 67.5485 21.0253 67.1671 21.567C66.7858 22.1043 66.2138 22.4402 65.4511 22.5745L64.8986 22.6395H62.2466V26H60.8881ZM66.3611 26L64.5151 22.191L65.8866 21.84L67.9146 26H66.3611ZM62.2466 21.3525H64.6191C64.7058 21.3525 64.8011 21.3482 64.9051 21.3395C65.0135 21.3308 65.1153 21.3157 65.2106 21.294C65.488 21.229 65.7111 21.1098 65.8801 20.9365C66.0491 20.7588 66.1705 20.5552 66.2441 20.3255C66.3178 20.0958 66.3546 19.8662 66.3546 19.6365C66.3546 19.4068 66.3178 19.1793 66.2441 18.954C66.1705 18.7243 66.0491 18.5228 65.8801 18.3495C65.7111 18.1718 65.488 18.0505 65.2106 17.9855C65.1153 17.9595 65.0135 17.9422 64.9051 17.9335C64.8011 17.9248 64.7058 17.9205 64.6191 17.9205H62.2466V21.3525ZM71.8717 26.195C71.174 26.195 70.5609 26.0433 70.0322 25.74C69.5079 25.4323 69.0984 25.0055 68.8037 24.4595C68.5134 23.9092 68.3682 23.2722 68.3682 22.5485C68.3682 21.7815 68.5112 21.1163 68.7972 20.553C69.0875 19.9897 69.4905 19.5542 70.0062 19.2465C70.5219 18.9388 71.122 18.785 71.8067 18.785C72.5217 18.785 73.1305 18.9518 73.6332 19.2855C74.1359 19.6148 74.5107 20.085 74.7577 20.696C75.009 21.307 75.1087 22.0328 75.0567 22.8735H73.6982V22.3795C73.6895 21.5648 73.5335 20.9625 73.2302 20.5725C72.9312 20.1825 72.474 19.9875 71.8587 19.9875C71.1784 19.9875 70.667 20.202 70.3247 20.631C69.9824 21.06 69.8112 21.6797 69.8112 22.49C69.8112 23.2613 69.9824 23.8593 70.3247 24.284C70.667 24.7043 71.161 24.9145 71.8067 24.9145C72.2314 24.9145 72.5975 24.8192 72.9052 24.6285C73.2172 24.4335 73.4599 24.1562 73.6332 23.7965L74.9657 24.219C74.6927 24.8473 74.2789 25.3348 73.7242 25.6815C73.1695 26.0238 72.552 26.195 71.8717 26.195ZM69.3692 22.8735V21.814H74.3807V22.8735H69.3692ZM78.933 26.195C78.2137 26.195 77.6027 26.0347 77.1 25.714C76.5974 25.3933 76.2117 24.9535 75.943 24.3945C75.6787 23.8355 75.5444 23.2007 75.54 22.49C75.5444 21.7663 75.683 21.1272 75.956 20.5725C76.229 20.0135 76.619 19.5758 77.126 19.2595C77.633 18.9432 78.2419 18.785 78.9525 18.785C79.7195 18.785 80.3739 18.9757 80.9155 19.357C81.4615 19.7383 81.8212 20.2605 81.9945 20.9235L80.6425 21.3135C80.5082 20.9192 80.2872 20.6137 79.9795 20.397C79.6762 20.176 79.3274 20.0655 78.933 20.0655C78.4867 20.0655 78.1205 20.1717 77.8345 20.384C77.5485 20.592 77.3362 20.878 77.1975 21.242C77.0589 21.606 76.9874 22.022 76.983 22.49C76.9874 23.2137 77.152 23.7987 77.477 24.245C77.8064 24.6913 78.2917 24.9145 78.933 24.9145C79.3707 24.9145 79.7239 24.8148 79.9925 24.6155C80.2655 24.4118 80.4735 24.1215 80.6165 23.7445L81.9945 24.0695C81.7649 24.7542 81.3857 25.2807 80.857 25.649C80.3284 26.013 79.687 26.195 78.933 26.195ZM82.6733 17.8295V16.51H84.0318V17.8295H82.6733ZM82.6733 26V18.98H84.0318V26H82.6733ZM88.6942 26.195C88.0225 26.195 87.4592 26.0325 87.0042 25.7075C86.5492 25.3782 86.2047 24.934 85.9707 24.375C85.7367 23.816 85.6197 23.1855 85.6197 22.4835C85.6197 21.7815 85.7345 21.151 85.9642 20.592C86.1982 20.033 86.5405 19.5932 86.9912 19.2725C87.4462 18.9475 88.0052 18.785 88.6682 18.785C89.3269 18.785 89.8945 18.9475 90.3712 19.2725C90.8522 19.5932 91.2227 20.033 91.4827 20.592C91.7427 21.1467 91.8727 21.7772 91.8727 22.4835C91.8727 23.1855 91.7427 23.8182 91.4827 24.3815C91.227 24.9405 90.8609 25.3825 90.3842 25.7075C89.9119 26.0325 89.3485 26.195 88.6942 26.195ZM85.3922 29.12V18.98H86.6012V24.0305H86.7572V29.12H85.3922ZM88.5057 24.9665C88.939 24.9665 89.2965 24.856 89.5782 24.635C89.8642 24.414 90.0765 24.1172 90.2152 23.7445C90.3582 23.3675 90.4297 22.9472 90.4297 22.4835C90.4297 22.0242 90.3582 21.6082 90.2152 21.2355C90.0765 20.8628 89.862 20.566 89.5717 20.345C89.2814 20.124 88.9109 20.0135 88.4602 20.0135C88.0355 20.0135 87.6845 20.1175 87.4072 20.3255C87.1342 20.5335 86.9305 20.8238 86.7962 21.1965C86.6662 21.5692 86.6012 21.9982 86.6012 22.4835C86.6012 22.9688 86.6662 23.3978 86.7962 23.7705C86.9262 24.1432 87.132 24.4357 87.4137 24.648C87.6954 24.8603 88.0594 24.9665 88.5057 24.9665ZM95.8364 26.195C95.1387 26.195 94.5256 26.0433 93.9969 25.74C93.4726 25.4323 93.0631 25.0055 92.7684 24.4595C92.4781 23.9092 92.3329 23.2722 92.3329 22.5485C92.3329 21.7815 92.4759 21.1163 92.7619 20.553C93.0522 19.9897 93.4552 19.5542 93.9709 19.2465C94.4866 18.9388 95.0867 18.785 95.7714 18.785C96.4864 18.785 97.0952 18.9518 97.5979 19.2855C98.1006 19.6148 98.4754 20.085 98.7224 20.696C98.9737 21.307 99.0734 22.0328 99.0214 22.8735H97.6629V22.3795C97.6542 21.5648 97.4982 20.9625 97.1949 20.5725C96.8959 20.1825 96.4387 19.9875 95.8234 19.9875C95.1431 19.9875 94.6317 20.202 94.2894 20.631C93.9471 21.06 93.7759 21.6797 93.7759 22.49C93.7759 23.2613 93.9471 23.8593 94.2894 24.284C94.6317 24.7043 95.1257 24.9145 95.7714 24.9145C96.1961 24.9145 96.5622 24.8192 96.8699 24.6285C97.1819 24.4335 97.4246 24.1562 97.5979 23.7965L98.9304 24.219C98.6574 24.8473 98.2436 25.3348 97.6889 25.6815C97.1342 26.0238 96.5167 26.195 95.8364 26.195ZM93.3339 22.8735V21.814H98.3454V22.8735H93.3339ZM101.637 23.4585C101.637 23.1465 101.661 22.854 101.708 22.581C101.76 22.308 101.856 22.048 101.994 21.801C102.111 21.567 102.248 21.3785 102.404 21.2355C102.564 21.0882 102.737 20.9452 102.924 20.8065C103.114 20.6635 103.314 20.4815 103.522 20.2605C103.695 20.0698 103.81 19.877 103.866 19.682C103.927 19.487 103.957 19.2768 103.957 19.0515C103.957 18.8868 103.938 18.733 103.899 18.59C103.86 18.447 103.795 18.3235 103.704 18.2195C103.565 18.0462 103.39 17.9248 103.177 17.8555C102.965 17.7818 102.744 17.745 102.514 17.745C102.306 17.745 102.107 17.7732 101.916 17.8295C101.73 17.8858 101.574 17.9725 101.448 18.0895C101.314 18.2022 101.214 18.343 101.149 18.512C101.089 18.6767 101.06 18.8565 101.065 19.0515H99.6347C99.6694 18.6442 99.7734 18.2628 99.9467 17.9075C100.12 17.5522 100.354 17.264 100.649 17.043C100.9 16.8437 101.186 16.6963 101.507 16.601C101.827 16.5013 102.148 16.4515 102.469 16.4515C102.928 16.4515 103.361 16.523 103.769 16.666C104.18 16.809 104.523 17.0408 104.796 17.3615C104.995 17.5868 105.145 17.8447 105.244 18.135C105.348 18.421 105.4 18.7178 105.4 19.0255C105.4 19.4372 105.311 19.8185 105.134 20.1695C104.96 20.5205 104.737 20.8412 104.464 21.1315C104.321 21.2832 104.176 21.4218 104.029 21.5475C103.881 21.6688 103.745 21.788 103.619 21.905C103.494 22.022 103.39 22.1498 103.307 22.2885C103.19 22.4878 103.123 22.6677 103.106 22.828C103.088 22.984 103.08 23.1942 103.08 23.4585H101.637ZM101.643 26V24.427H103.08V26H101.643ZM111.792 26.195C111.12 26.195 110.513 26.0802 109.972 25.8505C109.434 25.6165 108.99 25.285 108.639 24.856C108.292 24.4227 108.067 23.9092 107.963 23.3155L109.38 23.101C109.523 23.673 109.822 24.1193 110.277 24.44C110.732 24.7563 111.263 24.9145 111.87 24.9145C112.247 24.9145 112.593 24.856 112.91 24.739C113.226 24.6177 113.479 24.4465 113.67 24.2255C113.865 24.0002 113.963 23.7315 113.963 23.4195C113.963 23.2505 113.932 23.101 113.872 22.971C113.815 22.841 113.735 22.7283 113.631 22.633C113.531 22.5333 113.408 22.4488 113.261 22.3795C113.118 22.3058 112.959 22.243 112.786 22.191L110.388 21.4825C110.154 21.4132 109.915 21.3243 109.673 21.216C109.43 21.1033 109.207 20.9582 109.003 20.7805C108.804 20.5985 108.641 20.3753 108.516 20.111C108.39 19.8423 108.327 19.5173 108.327 19.136C108.327 18.5597 108.474 18.0722 108.769 17.6735C109.068 17.2705 109.471 16.9672 109.978 16.7635C110.485 16.5555 111.053 16.4515 111.681 16.4515C112.314 16.4602 112.879 16.5728 113.378 16.7895C113.88 17.0062 114.296 17.3182 114.626 17.7255C114.959 18.1285 115.189 18.6182 115.315 19.1945L113.859 19.4415C113.794 19.0905 113.655 18.7893 113.443 18.538C113.23 18.2823 112.97 18.0873 112.663 17.953C112.355 17.8143 112.021 17.7428 111.662 17.7385C111.315 17.7298 110.996 17.7818 110.706 17.8945C110.42 18.0072 110.19 18.1653 110.017 18.369C109.848 18.5727 109.764 18.8067 109.764 19.071C109.764 19.331 109.839 19.5412 109.991 19.7015C110.143 19.8618 110.329 19.9897 110.55 20.085C110.775 20.176 110.999 20.2518 111.22 20.3125L112.949 20.8C113.165 20.8607 113.41 20.943 113.683 21.047C113.96 21.1467 114.227 21.2875 114.483 21.4695C114.743 21.6515 114.957 21.8942 115.126 22.1975C115.295 22.4965 115.38 22.8735 115.38 23.3285C115.38 23.8008 115.284 24.2168 115.094 24.5765C114.903 24.9318 114.641 25.2308 114.307 25.4735C113.978 25.7118 113.596 25.8917 113.163 26.013C112.73 26.1343 112.273 26.195 111.792 26.195ZM121.107 26V22.5485C121.107 22.2755 121.083 21.996 121.035 21.71C120.992 21.4197 120.905 21.151 120.775 20.904C120.65 20.657 120.47 20.4577 120.236 20.306C120.006 20.1543 119.705 20.0785 119.332 20.0785C119.09 20.0785 118.86 20.1197 118.643 20.202C118.427 20.28 118.236 20.4078 118.071 20.5855C117.911 20.7632 117.783 20.9972 117.688 21.2875C117.597 21.5778 117.551 21.931 117.551 22.347L116.706 22.0285C116.706 21.3915 116.825 20.8303 117.064 20.345C117.302 19.8553 117.644 19.474 118.091 19.201C118.537 18.928 119.077 18.7915 119.709 18.7915C120.195 18.7915 120.602 18.8695 120.931 19.0255C121.261 19.1815 121.527 19.3873 121.731 19.643C121.939 19.8943 122.097 20.1695 122.205 20.4685C122.314 20.7675 122.387 21.06 122.426 21.346C122.465 21.632 122.485 21.8833 122.485 22.1V26H121.107ZM116.173 26V16.64H117.389V21.6905H117.551V26H116.173ZM125.575 26.195C125.055 26.195 124.62 26.0997 124.269 25.909C123.918 25.714 123.651 25.4583 123.469 25.142C123.292 24.8213 123.203 24.4703 123.203 24.089C123.203 23.7337 123.266 23.4217 123.391 23.153C123.517 22.8843 123.703 22.6568 123.95 22.4705C124.197 22.2798 124.501 22.126 124.86 22.009C125.172 21.918 125.525 21.8378 125.92 21.7685C126.314 21.6992 126.728 21.6342 127.161 21.5735C127.599 21.5128 128.032 21.4522 128.461 21.3915L127.967 21.6645C127.976 21.1142 127.859 20.7068 127.616 20.4425C127.378 20.1738 126.966 20.0395 126.381 20.0395C126.013 20.0395 125.675 20.1262 125.367 20.2995C125.06 20.4685 124.845 20.7502 124.724 21.1445L123.456 20.7545C123.63 20.1522 123.959 19.6733 124.444 19.318C124.934 18.9627 125.584 18.785 126.394 18.785C127.023 18.785 127.569 18.8933 128.032 19.11C128.5 19.3223 128.843 19.6603 129.059 20.124C129.172 20.3537 129.241 20.5963 129.267 20.852C129.293 21.1077 129.306 21.3828 129.306 21.6775V26H128.104V24.3945L128.338 24.6025C128.047 25.1398 127.677 25.5407 127.226 25.805C126.78 26.065 126.23 26.195 125.575 26.195ZM125.816 25.0835C126.201 25.0835 126.533 25.0163 126.81 24.882C127.088 24.7433 127.311 24.5678 127.48 24.3555C127.649 24.1432 127.759 23.9222 127.811 23.6925C127.885 23.4845 127.926 23.2505 127.935 22.9905C127.948 22.7305 127.954 22.5225 127.954 22.3665L128.396 22.529C127.967 22.594 127.577 22.6525 127.226 22.7045C126.875 22.7565 126.557 22.8085 126.271 22.8605C125.989 22.9082 125.738 22.9667 125.517 23.036C125.33 23.101 125.164 23.179 125.016 23.27C124.873 23.361 124.758 23.4715 124.672 23.6015C124.589 23.7315 124.548 23.8897 124.548 24.076C124.548 24.258 124.594 24.427 124.685 24.583C124.776 24.7347 124.914 24.856 125.101 24.947C125.287 25.038 125.525 25.0835 125.816 25.0835ZM130.409 26V18.98H131.618V20.683L131.449 20.462C131.536 20.2367 131.649 20.0308 131.787 19.8445C131.926 19.6538 132.086 19.4978 132.268 19.3765C132.446 19.2465 132.643 19.1468 132.86 19.0775C133.081 19.0038 133.306 18.9605 133.536 18.9475C133.765 18.9302 133.986 18.941 134.199 18.98V20.254C133.969 20.1933 133.713 20.176 133.432 20.202C133.154 20.228 132.899 20.3168 132.665 20.4685C132.444 20.6115 132.268 20.7848 132.138 20.9885C132.013 21.1922 131.922 21.4197 131.865 21.671C131.809 21.918 131.781 22.1802 131.781 22.4575V26H130.409ZM137.838 26.195C137.14 26.195 136.527 26.0433 135.999 25.74C135.474 25.4323 135.065 25.0055 134.77 24.4595C134.48 23.9092 134.335 23.2722 134.335 22.5485C134.335 21.7815 134.478 21.1163 134.764 20.553C135.054 19.9897 135.457 19.5542 135.973 19.2465C136.488 18.9388 137.088 18.785 137.773 18.785C138.488 18.785 139.097 18.9518 139.6 19.2855C140.102 19.6148 140.477 20.085 140.724 20.696C140.975 21.307 141.075 22.0328 141.023 22.8735H139.665V22.3795C139.656 21.5648 139.5 20.9625 139.197 20.5725C138.898 20.1825 138.44 19.9875 137.825 19.9875C137.145 19.9875 136.633 20.202 136.291 20.631C135.949 21.06 135.778 21.6797 135.778 22.49C135.778 23.2613 135.949 23.8593 136.291 24.284C136.633 24.7043 137.127 24.9145 137.773 24.9145C138.198 24.9145 138.564 24.8192 138.872 24.6285C139.184 24.4335 139.426 24.1562 139.6 23.7965L140.932 24.219C140.659 24.8473 140.245 25.3348 139.691 25.6815C139.136 26.0238 138.518 26.195 137.838 26.195ZM135.336 22.8735V21.814H140.347V22.8735H135.336ZM145.409 26L143.264 18.9735L144.609 18.98L146.078 23.7965L147.56 18.98H148.73L150.212 23.7965L151.681 18.98H153.02L150.875 26H149.783L148.145 20.917L146.501 26H145.409ZM153.729 17.8295V16.51H155.088V17.8295H153.729ZM153.729 26V18.98H155.088V26H153.729ZM160.472 26C160.03 26.0867 159.597 26.1235 159.172 26.1105C158.747 26.0975 158.368 26.0152 158.034 25.8635C157.701 25.7118 157.449 25.4735 157.28 25.1485C157.129 24.8582 157.046 24.5635 157.033 24.2645C157.025 23.9612 157.02 23.6188 157.02 23.2375V17.03H158.385V23.1725C158.385 23.4542 158.388 23.699 158.392 23.907C158.401 24.115 158.446 24.2905 158.528 24.4335C158.684 24.7022 158.931 24.856 159.269 24.895C159.612 24.9297 160.013 24.9145 160.472 24.8495V26ZM155.675 20.072V18.98H160.472V20.072H155.675ZM166.294 26V22.5485C166.294 22.2755 166.27 21.996 166.222 21.71C166.179 21.4197 166.092 21.151 165.962 20.904C165.837 20.657 165.657 20.4577 165.423 20.306C165.193 20.1543 164.892 20.0785 164.519 20.0785C164.277 20.0785 164.047 20.1197 163.83 20.202C163.614 20.28 163.423 20.4078 163.258 20.5855C163.098 20.7632 162.97 20.9972 162.875 21.2875C162.784 21.5778 162.738 21.931 162.738 22.347L161.893 22.0285C161.893 21.3915 162.013 20.8303 162.251 20.345C162.489 19.8553 162.832 19.474 163.278 19.201C163.724 18.928 164.264 18.7915 164.896 18.7915C165.382 18.7915 165.789 18.8695 166.118 19.0255C166.448 19.1815 166.714 19.3873 166.918 19.643C167.126 19.8943 167.284 20.1695 167.392 20.4685C167.501 20.7675 167.574 21.06 167.613 21.346C167.652 21.632 167.672 21.8833 167.672 22.1V26H166.294ZM161.36 26V16.64H162.576V21.6905H162.738V26H161.36ZM172.78 26.195C172.26 26.195 171.825 26.0997 171.474 25.909C171.123 25.714 170.856 25.4583 170.674 25.142C170.496 24.8213 170.408 24.4703 170.408 24.089C170.408 23.7337 170.47 23.4217 170.596 23.153C170.722 22.8843 170.908 22.6568 171.155 22.4705C171.402 22.2798 171.705 22.126 172.065 22.009C172.377 21.918 172.73 21.8378 173.125 21.7685C173.519 21.6992 173.933 21.6342 174.366 21.5735C174.804 21.5128 175.237 21.4522 175.666 21.3915L175.172 21.6645C175.181 21.1142 175.064 20.7068 174.821 20.4425C174.583 20.1738 174.171 20.0395 173.586 20.0395C173.218 20.0395 172.88 20.1262 172.572 20.2995C172.264 20.4685 172.05 20.7502 171.929 21.1445L170.661 20.7545C170.834 20.1522 171.164 19.6733 171.649 19.318C172.139 18.9627 172.789 18.785 173.599 18.785C174.227 18.785 174.773 18.8933 175.237 19.11C175.705 19.3223 176.047 19.6603 176.264 20.124C176.377 20.3537 176.446 20.5963 176.472 20.852C176.498 21.1077 176.511 21.3828 176.511 21.6775V26H175.309V24.3945L175.543 24.6025C175.252 25.1398 174.882 25.5407 174.431 25.805C173.985 26.065 173.434 26.195 172.78 26.195ZM173.021 25.0835C173.406 25.0835 173.738 25.0163 174.015 24.882C174.292 24.7433 174.516 24.5678 174.685 24.3555C174.854 24.1432 174.964 23.9222 175.016 23.6925C175.09 23.4845 175.131 23.2505 175.14 22.9905C175.153 22.7305 175.159 22.5225 175.159 22.3665L175.601 22.529C175.172 22.594 174.782 22.6525 174.431 22.7045C174.08 22.7565 173.762 22.8085 173.476 22.8605C173.194 22.9082 172.943 22.9667 172.722 23.036C172.535 23.101 172.368 23.179 172.221 23.27C172.078 23.361 171.963 23.4715 171.877 23.6015C171.794 23.7315 171.753 23.8897 171.753 24.076C171.753 24.258 171.799 24.427 171.89 24.583C171.981 24.7347 172.119 24.856 172.306 24.947C172.492 25.038 172.73 25.0835 173.021 25.0835ZM13.5535 44V36.733C13.5535 36.5553 13.56 36.3668 13.573 36.1675C13.586 35.9638 13.6228 35.7645 13.6835 35.5695C13.7485 35.3702 13.8547 35.1882 14.002 35.0235C14.1797 34.8285 14.3747 34.6898 14.587 34.6075C14.7993 34.5252 15.0095 34.4775 15.2175 34.4645C15.4298 34.4515 15.6248 34.445 15.8025 34.445H16.6865V35.563H15.8675C15.5468 35.563 15.3063 35.6432 15.146 35.8035C14.99 35.9595 14.912 36.1827 14.912 36.473V44H13.5535ZM12.39 38.072V36.98H16.6865V38.072H12.39ZM17.1365 44V36.98H18.3455V38.683L18.1765 38.462C18.2632 38.2367 18.3759 38.0308 18.5145 37.8445C18.6532 37.6538 18.8135 37.4978 18.9955 37.3765C19.1732 37.2465 19.3704 37.1468 19.587 37.0775C19.808 37.0038 20.0334 36.9605 20.263 36.9475C20.4927 36.9302 20.7137 36.941 20.926 36.98V38.254C20.6964 38.1933 20.4407 38.176 20.159 38.202C19.8817 38.228 19.626 38.3168 19.392 38.4685C19.171 38.6115 18.9955 38.7848 18.8655 38.9885C18.7399 39.1922 18.6489 39.4197 18.5925 39.671C18.5362 39.918 18.508 40.1802 18.508 40.4575V44H17.1365ZM21.7089 35.8295V34.51H23.0674V35.8295H21.7089ZM21.7089 44V36.98H23.0674V44H21.7089ZM27.5478 44.195C26.8501 44.195 26.237 44.0433 25.7083 43.74C25.184 43.4323 24.7745 43.0055 24.4798 42.4595C24.1895 41.9092 24.0443 41.2722 24.0443 40.5485C24.0443 39.7815 24.1873 39.1163 24.4733 38.553C24.7636 37.9897 25.1666 37.5542 25.6823 37.2465C26.198 36.9388 26.7981 36.785 27.4828 36.785C28.1978 36.785 28.8066 36.9518 29.3093 37.2855C29.812 37.6148 30.1868 38.085 30.4338 38.696C30.6851 39.307 30.7848 40.0328 30.7328 40.8735H29.3743V40.3795C29.3656 39.5648 29.2096 38.9625 28.9063 38.5725C28.6073 38.1825 28.1501 37.9875 27.5348 37.9875C26.8545 37.9875 26.3431 38.202 26.0008 38.631C25.6585 39.06 25.4873 39.6797 25.4873 40.49C25.4873 41.2613 25.6585 41.8593 26.0008 42.284C26.3431 42.7043 26.8371 42.9145 27.4828 42.9145C27.9075 42.9145 28.2736 42.8192 28.5813 42.6285C28.8933 42.4335 29.136 42.1562 29.3093 41.7965L30.6418 42.219C30.3688 42.8473 29.955 43.3348 29.4003 43.6815C28.8456 44.0238 28.2281 44.195 27.5478 44.195ZM25.0453 40.8735V39.814H30.0568V40.8735H25.0453ZM36.3427 44V40.5485C36.3427 40.2755 36.3189 39.996 36.2712 39.71C36.2279 39.4197 36.1412 39.151 36.0112 38.904C35.8855 38.657 35.7057 38.4577 35.4717 38.306C35.242 38.1543 34.9409 38.0785 34.5682 38.0785C34.3255 38.0785 34.0959 38.1197 33.8792 38.202C33.6625 38.28 33.4719 38.4078 33.3072 38.5855C33.1469 38.7632 33.019 38.9972 32.9237 39.2875C32.8327 39.5778 32.7872 39.931 32.7872 40.347L31.9422 40.0285C31.9422 39.3915 32.0614 38.8303 32.2997 38.345C32.538 37.8553 32.8804 37.474 33.3267 37.201C33.773 36.928 34.3125 36.7915 34.9452 36.7915C35.4305 36.7915 35.8379 36.8695 36.1672 37.0255C36.4965 37.1815 36.763 37.3873 36.9667 37.643C37.1747 37.8943 37.3329 38.1695 37.4412 38.4685C37.5495 38.7675 37.6232 39.06 37.6622 39.346C37.7012 39.632 37.7207 39.8833 37.7207 40.1V44H36.3427ZM31.4092 44V36.98H32.6247V39.008H32.7872V44H31.4092ZM41.5284 44.195C40.8741 44.195 40.3086 44.0325 39.8319 43.7075C39.3596 43.3825 38.9934 42.9405 38.7334 42.3815C38.4777 41.8182 38.3499 41.1855 38.3499 40.4835C38.3499 39.7772 38.4799 39.1467 38.7399 38.592C38.9999 38.033 39.3682 37.5932 39.8449 37.2725C40.3259 36.9475 40.8957 36.785 41.5544 36.785C42.2174 36.785 42.7742 36.9475 43.2249 37.2725C43.6799 37.5932 44.0222 38.033 44.2519 38.592C44.4859 39.151 44.6029 39.7815 44.6029 40.4835C44.6029 41.1855 44.4859 41.816 44.2519 42.375C44.0179 42.934 43.6734 43.3782 43.2184 43.7075C42.7634 44.0325 42.2001 44.195 41.5284 44.195ZM41.7169 42.9665C42.1632 42.9665 42.5272 42.8603 42.8089 42.648C43.0906 42.4357 43.2964 42.1432 43.4264 41.7705C43.5564 41.3978 43.6214 40.9688 43.6214 40.4835C43.6214 39.9982 43.5542 39.5692 43.4199 39.1965C43.2899 38.8238 43.0862 38.5335 42.8089 38.3255C42.5359 38.1175 42.1871 38.0135 41.7624 38.0135C41.3117 38.0135 40.9412 38.124 40.6509 38.345C40.3606 38.566 40.1439 38.8628 40.0009 39.2355C39.8622 39.6082 39.7929 40.0242 39.7929 40.4835C39.7929 40.9472 39.8622 41.3675 40.0009 41.7445C40.1439 42.1172 40.3562 42.414 40.6379 42.635C40.9239 42.856 41.2836 42.9665 41.7169 42.9665ZM43.6214 44V38.9495H43.4654V34.64H44.8304V44H43.6214ZM46.7141 44V42.6805H48.0726V44H46.7141ZM46.7141 41.66V34.64H48.0726V41.66H46.7141Z"
        />
    </Svg>
);

export default ShareBubble;