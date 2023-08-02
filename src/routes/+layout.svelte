<script>
  import "../app.css";

  const mainNav = [
      {
          href: "about",
          text: "About"
      },
      {
          href: "uses",
          text: "/uses"
      }
  ]
</script>

<div class="w-full flex flex-col sm:flex-row flex-wrap sm:flex-nowrap py-4 flex-grow">
    <div class="w-fixed w-full flex-shrink flex-grow-0 px-4">
        <div class="sticky top-0 p-4 w-full h-full">
            <a href="/">
                <div class="w-52 h-52 drop-shadow-lg rounded-[28px] p-px bg-gradient-to-br from-primary to-accent from-50% flex justify-center items-center">
                    <img class="w-48 h-48 rounded-[24px] opacity-80" src="/img/informal_lowres_square_bw.jpg" alt="black and white portait of Will Osbourne" />
                </div>
                <div class="flex w-52 justify-center">
                    <h1 class="font-mono text-2xl text-accent drop-shadow-xl word-accent"><span>Will Osbourne</span></h1>
                </div>
            </a>

            {#each mainNav as {href, text}}
                <ul>
                    <li>
                        <a {href}>{text}</a>
                    </li>
                </ul>
            {/each}

        </div>
    </div>
    <main class="w-full flex-grow pt-1 px-3">
        <slot />
    </main>
    <div class="w-fixed w-full flex-shrink flex-grow-0 px-2">
        <div class="flex sm:flex-col px-2">
            <p class="font-mono text-2xl">Blog</p>
            <ul>
                <li>eventually blog posts will move here</li>
            </ul>
        </div>
    </div>
</div>