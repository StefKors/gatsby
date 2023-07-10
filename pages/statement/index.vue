<template>
  <article class="container">
    <div class="header" align="center">
      <img
        class="appicon"
        src="~/assets/Statement/mac1024.png"
        height="128px"
        width="128px"
      />
      <h1 align="center">Statement</h1>
      <p>
        Statement is a tiny image editing tool. Use it to apply filters to
        images.
      </p>

      <button>
        <a
          target="_blank"
          href="https://apps.apple.com/us/app/statement-image-editor/id6448959871"
          >Download from Appstore</a
        >
      </button>
    </div>

    <div>
      <div class="os-support">
        <picture>
          <source
            media="(prefers-color-scheme: dark)"
            srcset="~/assets/Statement/Images/macos.svg"
          />
          <source
            media="(prefers-color-scheme: light)"
            srcset="~/assets/Statement/Images/macos-active.svg"
          />
          <img
            alt="macos"
            src="~/assets/Statement/Images/macos-active.svg"
            height="24"
          />
        </picture>

        <picture>
          <source
            media="(prefers-color-scheme: dark)"
            srcset="~/assets/Statement/Images/ios-active.svg"
          />
          <source
            media="(prefers-color-scheme: light)"
            srcset="~/assets/Statement/Images/ios.svg"
          />
          <img
            alt="macos"
            src="~/assets/Statement/Images/ios.svg"
            height="24"
          />
        </picture>

        <picture>
          <source
            media="(prefers-color-scheme: dark)"
            srcset="~/assets/Statement/Images/ipados-active.svg"
          />
          <source
            media="(prefers-color-scheme: light)"
            srcset="~/assets/Statement/Images/ipados.svg"
          />
          <img
            alt="macos"
            src="~/assets/Statement/Images/ipados.svg"
            height="24"
          />
        </picture>

        <picture>
          <source
            media="(prefers-color-scheme: dark)"
            srcset="~/assets/Statement/Images/tvos-active.svg"
          />
          <source
            media="(prefers-color-scheme: light)"
            srcset="~/assets/Statement/Images/tvos.svg"
          />
          <img
            alt="macos"
            src="~/assets/Statement/Images/tvos.svg"
            height="24"
          />
        </picture>

        <picture>
          <source
            media="(prefers-color-scheme: dark)"
            srcset="~/assets/Statement/Images/watchos-active.svg"
          />
          <source
            media="(prefers-color-scheme: light)"
            srcset="~/assets/Statement/Images/watchos.svg"
          />
          <img
            alt="macos"
            src="~/assets/Statement/Images/watchos.svg"
            height="24"
          />
        </picture>
      </div>

      <div class="screenshot">
        <picture>
          <source
            media="(prefers-color-scheme: dark)"
            srcset="~/assets/Statement/Images/Screenshot-dark.png"
          />
          <source
            media="(prefers-color-scheme: light)"
            srcset="~/assets/Statement/Images/Screenshot-light.png"
          />
          <img
            alt="Screenshot of Statement"
            src="~/assets/Statement/Images/Screenshot-light.png"
          />
        </picture>
      </div>

      <img alt="Screenshot of Statement" src="~/assets/Statement/Images/Screen1.png">
<img alt="Screenshot of Statement" src="~/assets/Statement/Images/Screen2.png">
<img alt="Screenshot of Statement" src="~/assets/Statement/Images/Screen3.png">
<img alt="Screenshot of Statement" src="~/assets/Statement/Images/Screen4.png">

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
  margin-bottom: 2rem;
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
