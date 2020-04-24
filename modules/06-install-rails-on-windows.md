# Install Rails on Windows

## Note

The preferred way of installing rails on windows is via docker. However, since docker requires a Windows Pro version, this is an
alternative way to get started on rails.

## Prerequisites
Your windows should be on Windows 10 on 64-bit installations.

## Install windows subsystem

- Open Powershell as Administrator and run the following commands:
```
dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart
```

- Install ubuntu from the Microsoft Store
It's succesfully installed when you can search the ubuntu app in your task bar.

- Run the ubuntu app
It should install freely and wait for it to complete. The app should ask for a user and password once it's done installing.

### Troubleshooting

#### Ubuntu app raises WslRegisterDistribution
```
WslRegisterDistribution failed with error: 0x8007019e
The Windows Subsystem for Linux optional component is not enabled. Please enable it and try again.
``` 
First option, try restarting windows and run the ubuntu app again.

Otherwise, do the following:
- Go to Settings > Update & Security > For developers
- Choose developer mode, wait for it to finish then close window
- On the search bar, look for optionalfeatures.exe and run it
- Tick "Windows Subsystem for Linux" and click OK. It would prompt you to restart, do so.
- Run the ubuntu app again

## Update ubuntu dependencies

Run the following:
```
sudo apt-get update
sudo apt-get install git-core curl zlib1g-dev build-essential libssl-dev libreadline-dev libyaml-dev libsqlite3-dev sqlite3 libxml2-dev libxslt1-dev libcurl4-openssl-dev software-properties-common libffi-dev
```

## Install Ruby

- Install rbenv (Ruby versioning tool)
```
cd
git clone https://github.com/rbenv/rbenv.git ~/.rbenv
echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bashrc
echo 'eval "$(rbenv init -)"' >> ~/.bashrc
exec $SHELL

git clone https://github.com/rbenv/ruby-build.git ~/.rbenv/plugins/ruby-build
echo 'export PATH="$HOME/.rbenv/plugins/ruby-build/bin:$PATH"' >> ~/.bashrc
exec $SHELL

rbenv install 2.7.1
rbenv global 2.7.1
ruby -v
```

- Install bundler
```
gem install bundler
```

## Configure Git and Github

- Setup your github credentials. Remember to replace the name and email with your github name and email
```
git config --global color.ui true
git config --global user.name "YOUR NAME"
git config --global user.email "YOUR@EMAIL.com"
```

- Generate an ssh key
```
ssh-keygen -t rsa -b 4096 -C "YOUR@EMAIL.com"
```

- Copy the generated ssh key to github
```
cat ~/.ssh/id_rsa.pub
```

- Copy the displayed value then go to github.com `Settings > SSH and GPG keys > New SSH Key` and paste it there
- Test that the ssh key works
```
ssh - T git@github.com
```

It should result into something like:
```
Hi <person>! You've successfully authenticated, but GitHub does not provide shell access.
```

## Install NodeJS and Yarn

- Install NVM (Node version manager)
```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
nvm install node
node -v
```

The version of your installed node should display.

- Install Yarn
```
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list

sudo apt update
sudo apt-get install -y yarn
```

## Install Rails

```
gem install rails
rbenv rehash
rails -v
```

## Install Postgres

- Install postgres for windows via this [link](https://www.postgresql.org/download/windows/)
- Update ubuntu headers for postgress
```
sudo apt install libpq-dev
```
- Point PGHOST to localhost
```
export PGHOST=localhost
```

## Setup a new Rails app

- Setup rails app
```
rails new testapp -d postgresql
rake db:create
rails s
```
- Visit http://localhost:3000 on your browser to display your app

### Troubleshooting

#### PG::ConnectionBad: fe_sendauth: no password supplied
- Edit `testapp/config/database.yml`
- Under the `default:` key, add the following:
```
default: &default
  ...
  username: <username you used in postgres installation (most likely "postgres")>                                             
  password: <password you used in postgres installation>
```

# Success 

Take a break and bask in the glory of your success!
