# Installing Bitcoin local node

## Install bitcoin
``` bash
sudo apt-get install software-properties-common
sudo add-apt-repository ppa:bitcoin/bitcoin
sudo apt-get update
sudo apt-get install libdb4.8-dev libdb4.8++-dev
```

## Install relevant dependencies

``` bash
apt install git build-essential libtool autotools-dev automake  pkg-config libssl-dev libevent-dev bsdmainutils libboost-system-dev  libboost-filesystem-dev libboost-chrono-dev libboost-program-options-dev  libboost-test-dev libboost-thread-dev libminiupnpc-dev libzmq3-dev jq
```

## Install the last dependency
```
wget https://raw.githubusercontent.com/Crypto-lyon/INSAcoin/master/scripts/install_libdb4.8.sh && chmod +x install_libdb4.8.sh &&  ./install_libdb4.8.sh amd64 && rm install_libdb4.8.sh
```

## Diving in it
```
su - bitcoin
bash # In order to a little more comfortable
cd ~
git clone -b 0.17 https://github.com/bitcoin/bitcoin && cd bitcoin
./autogen.sh
./configure --enable-cxx --without-gui
make -j 4 # Change 4 to fit your number of cores
su -c 'make install'
```

## Configure the path to conf that shows the setup info of the node
``` bash
bitcoind -conf=/path/to/the/conf
```
