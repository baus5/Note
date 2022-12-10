# Git



## username

Set a Git username:

```
git config --global user.name "Mona Lisa"
```

Confirm:

```bash
$ git config --global user.name
Mona Lisa
```



### single repo

Change the current working directory.

Set a Git username:

```
$ git config user.name "Mona Lisa"
```

Confirm:

```
$ git config user.name
> Mona Lisa
```



## email

```
$ git config --global user.email "YOUR_EMAIL"
```

```
$ git config --global user.email
email@example.com
```



## git help

```bash
git help
git help --help
```



## git status

Show the working tree status

```
git status
```



## git remote

Check/List your existing remotes:

```bash
git remote -v
```

```
origin  https://github.com/USERNAME/REPOSITORY.git (fetch)
origin  https://github.com/USERNAME/REPOSITORY.git (push)
```

Change URL from HTTPS to SSH:

```bash
git remote set-url origin git@github.com:username/repo.git
```

Verify:

```
git remote -v
```

```
origin  git@github.com: USERNAME/REPOSITORY.git (fetch)
origin  git@github.com: USERNAME/REPOSITORY.git (push)
```



## git fetch



## git pull



## git push



## commit & push

```bash
$ git add myfile1.txt myfile2.txt
$ git commit -m "My commit message"
$ git push -u origin HEAD
```



# GitHub CLI



# Git Bash

*for windows*



# WSL



## Use SSH

How to Use SSH with GitHub (Instead of HTTPS) on Windows WSL

https://logfetch.com/git-ssh-keys/



### Obtain SSH key

```
ls -al ~/.ssh
```

```
id_rsa.pub
id_ecdsa.pub
id_ed25519.pub
```



### Generate a new key

```
ssh-keygen -t ed25519 -C "some_email@gmail.com"
```



### Add key to

```
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519
```



### Add GitHub

```
cat ~/.ssh/id_ed25519.pub
cat ~/.ssh/id_ed25519.pub | clip  # on Windows
```

* Settings > SSH and GPG keys.
* New SSH key
* Title (Personal Pcname  WSL)
* Key > paste

### Test

```
ssh -T git@github.com
```

