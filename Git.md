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

