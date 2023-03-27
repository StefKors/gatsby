<template>
  <article class="container">
    <div class="header" align="center">
      <img class="appicon" src="~/assets/Commitment/mac1024.png" height="128px" width="128px" />
      <h1 align="center">Commitment</h1>
      <p>
        Commitment is a new native macOS Git Client. Written in SwiftUI and built to be a light and powerful companion during your workday. Available in TestFlight.
      </p>
    </div>

    <div>
      <div class="os-support">
        <picture>
          <source
            media="(prefers-color-scheme: dark)"
            srcset="~/assets/Commitment/Images/macos.svg"
          />
          <source
            media="(prefers-color-scheme: light)"
            srcset="~/assets/Commitment/Images/macos-active.svg"
          />
          <img
            alt="macos"
            src="~/assets/Commitment/Images/macos-active.svg"
            height="24"
          />
        </picture>

        <picture>
          <source
            media="(prefers-color-scheme: dark)"
            srcset="~/assets/Commitment/Images/ios-active.svg"
          />
          <source
            media="(prefers-color-scheme: light)"
            srcset="~/assets/Commitment/Images/ios.svg"
          />
          <img alt="macos" src="~/assets/Commitment/Images/ios.svg" height="24" />
        </picture>

        <picture>
          <source
            media="(prefers-color-scheme: dark)"
            srcset="~/assets/Commitment/Images/ipados-active.svg"
          />
          <source
            media="(prefers-color-scheme: light)"
            srcset="~/assets/Commitment/Images/ipados.svg"
          />
          <img alt="macos" src="~/assets/Commitment/Images/ipados.svg" height="24" />
        </picture>

        <picture>
          <source
            media="(prefers-color-scheme: dark)"
            srcset="~/assets/Commitment/Images/tvos-active.svg"
          />
          <source
            media="(prefers-color-scheme: light)"
            srcset="~/assets/Commitment/Images/tvos.svg"
          />
          <img alt="macos" src="~/assets/Commitment/Images/tvos.svg" height="24" />
        </picture>

        <picture>
          <source
            media="(prefers-color-scheme: dark)"
            srcset="~/assets/Commitment/Images/watchos-active.svg"
          />
          <source
            media="(prefers-color-scheme: light)"
            srcset="~/assets/Commitment/Images/watchos.svg"
          />
          <img alt="macos" src="~/assets/Commitment/Images/watchos.svg" height="24" />
        </picture>
      </div>

      <div class="screenshot">
            <picture>
        <source
          media="(prefers-color-scheme: dark)"
          srcset="~/assets/Commitment/Images/changes-dark.png"
        />
        <source
          media="(prefers-color-scheme: light)"
          srcset="~/assets/Commitment/Images/changes-light.png"
        />
        <img
          alt="Screenshot of Commitment, the native macOS Git Interface"
          src="~/assets/Commitment/Images/changes-dark.png"
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
