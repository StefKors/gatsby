<template>
  <article class="container">
    <div class="header" align="center">
      <img class="appicon" src="~/assets/GitLab/mac1024.png" height="128px" width="128px" />
      <h1 align="center">GitLab Widget</h1>
      <p>
        GitLab Widget is a menu bar application that makes it easier to work with GitLab. The Widget makes it easy to see the merge requests you opened and the merge requests your should review. It will also notify you when any of your merge requests get approved.
      </p>
    </div>

    <div>
      <div class="os-support">
        <picture>
          <source
            media="(prefers-color-scheme: dark)"
            srcset="~/assets/GitLab/Images/macos.svg"
          />
          <source
            media="(prefers-color-scheme: light)"
            srcset="~/assets/GitLab/Images/macos-active.svg"
          />
          <img
            alt="macos"
            src="~/assets/GitLab/Images/macos-active.svg"
            height="24"
          />
        </picture>

        <picture>
          <source
            media="(prefers-color-scheme: dark)"
            srcset="~/assets/GitLab/Images/ios-active.svg"
          />
          <source
            media="(prefers-color-scheme: light)"
            srcset="~/assets/GitLab/Images/ios.svg"
          />
          <img alt="macos" src="~/assets/GitLab/Images/ios.svg" height="24" />
        </picture>

        <picture>
          <source
            media="(prefers-color-scheme: dark)"
            srcset="~/assets/GitLab/Images/ipados-active.svg"
          />
          <source
            media="(prefers-color-scheme: light)"
            srcset="~/assets/GitLab/Images/ipados.svg"
          />
          <img alt="macos" src="~/assets/GitLab/Images/ipados.svg" height="24" />
        </picture>

        <picture>
          <source
            media="(prefers-color-scheme: dark)"
            srcset="~/assets/GitLab/Images/tvos-active.svg"
          />
          <source
            media="(prefers-color-scheme: light)"
            srcset="~/assets/GitLab/Images/tvos.svg"
          />
          <img alt="macos" src="~/assets/GitLab/Images/tvos.svg" height="24" />
        </picture>

        <picture>
          <source
            media="(prefers-color-scheme: dark)"
            srcset="~/assets/GitLab/Images/watchos-active.svg"
          />
          <source
            media="(prefers-color-scheme: light)"
            srcset="~/assets/GitLab/Images/watchos.svg"
          />
          <img alt="macos" src="~/assets/GitLab/Images/watchos.svg" height="24" />
        </picture>
      </div>

      <div class="screenshot">
            <picture>
        <source
          media="(prefers-color-scheme: dark)"
          srcset="~/assets/GitLab/Images/Screenshot-dark.png"
        />
        <source
          media="(prefers-color-scheme: light)"
          srcset="~/assets/GitLab/Images/Screenshot-light.png"
        />
        <img
          alt="Screenshot of GitLab, the native macOS Git Interface"
          src="~/assets/GitLab/Images/Screenshot-dark.png"
        />
      </picture>
      </div>
    </div>
  </article>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.header p {
  max-width: 60ch;
  orphans: 3;
}
/* cubic-bezier(0.165, 0.84, 0.44, 1) 0.25s; */
.appicon {
  width: 128px;
  height: 128px;
}

.os-support {
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-content: center;
  justify-content: center;
}

.screenshot {
  padding-top: 1rem;
    display: flex;
  flex-direction: row;
  gap: 1rem;
  align-content: center;
  justify-content: center;

  img {
    max-width: 1200px;
  }
}
</style>
