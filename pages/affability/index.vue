<template>
  <article class="container">
    <div class="header" align="center">
      <img class="appicon" src="~/assets/Affability/mac1024.png" height="128px" width="128px" />
      <h1 align="center">Affability</h1>
      <p>
        Affability is a small utility for app developers. Pick a color on your screen and get the SwiftUI Color values directly into your Clipboard.
      </p>

      <button><a href="https://apps.apple.com/nl/app/affability/id6449466690?l=en-GB&mt=12">Download from Appstore</a></button>
    </div>

    <div>
      <div class="os-support">
        <picture>
          <source
            media="(prefers-color-scheme: dark)"
            srcset="~/assets/Affability/Images/macos.svg"
          />
          <source
            media="(prefers-color-scheme: light)"
            srcset="~/assets/Affability/Images/macos-active.svg"
          />
          <img
            alt="macos"
            src="~/assets/Affability/Images/macos-active.svg"
            height="24"
          />
        </picture>

        <picture>
          <source
            media="(prefers-color-scheme: dark)"
            srcset="~/assets/Affability/Images/ios-active.svg"
          />
          <source
            media="(prefers-color-scheme: light)"
            srcset="~/assets/Affability/Images/ios.svg"
          />
          <img alt="macos" src="~/assets/Affability/Images/ios.svg" height="24" />
        </picture>

        <picture>
          <source
            media="(prefers-color-scheme: dark)"
            srcset="~/assets/Affability/Images/ipados-active.svg"
          />
          <source
            media="(prefers-color-scheme: light)"
            srcset="~/assets/Affability/Images/ipados.svg"
          />
          <img alt="macos" src="~/assets/Affability/Images/ipados.svg" height="24" />
        </picture>

        <picture>
          <source
            media="(prefers-color-scheme: dark)"
            srcset="~/assets/Affability/Images/tvos-active.svg"
          />
          <source
            media="(prefers-color-scheme: light)"
            srcset="~/assets/Affability/Images/tvos.svg"
          />
          <img alt="macos" src="~/assets/Affability/Images/tvos.svg" height="24" />
        </picture>

        <picture>
          <source
            media="(prefers-color-scheme: dark)"
            srcset="~/assets/Affability/Images/watchos-active.svg"
          />
          <source
            media="(prefers-color-scheme: light)"
            srcset="~/assets/Affability/Images/watchos.svg"
          />
          <img alt="macos" src="~/assets/Affability/Images/watchos.svg" height="24" />
        </picture>
      </div>

      <div class="screenshot">
            <picture>
        <source
          media="(prefers-color-scheme: dark)"
          srcset="~/assets/Affability/Images/Screenshot-dark.png"
        />
        <source
          media="(prefers-color-scheme: light)"
          srcset="~/assets/Affability/Images/Screenshot-light.png"
        />
        <img
          alt="Screenshot of Affability"
          src="~/assets/Affability/Images/Screenshot-light.png"
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

.header button {
  text-align: center;
  display: block;
  margin: auto;
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