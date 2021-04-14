<!--
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![GPLv3 License][license-shield]][license-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/jerlendds/studium">
    <img src="src/assets/logo.svg" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Studium</h3>

  <p align="center">
    retain, recall, and start remembering information and ideas from your websites
    <br />
    <a href="https://github.com/jerlendds/studium/tree/master/docs"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/jerlendds/studium/tree/master/docs">View Demo</a>
    ·
    <a href="https://github.com/jerlendds/studium/issues">Report Bug</a>
    ·
    <a href="https://github.com/jerlendds/studium/issues">Request Feature</a>
  </p>
</p>

#### Project Status

This project currently **isn't ready for public use.** If you're interested in contributing feel free to reach out and <a href="#contact">contact</a> me

<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

**coming soon...**

Efficiently collect, store, and learn from information on websites. Eventually I want to integrate with other note taking applications (Notion, RemNote, etc) but for now the core feature is being able to cite and store whatever text you highlight on a webpage. When you store it you have an option to add additional notes, create flashcards from what you have, and or set review reminders

### Built With

- [VueJS](https://vuejs.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Cytoscape](https://js.cytoscape.org/)

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple steps.

### Installation

1. Clone the repo

   ```sh
   git clone https://github.com/jerlendds/studium.git
   ```

2. Install NPM packages

   ```sh
   yarn install
   ```

3. Build extension
   ```sh
   yarn build
   ```

The resulting extension can be found in the `dist/` directory.

**Note:** _`Uncaught EvalError: call to eval() blocked by CSP` if this error is recieved navigate to `about:config` and set `security.csp.enable false`_

## Usage

_For more examples, please refer to the [Documentation](https://github.com/jerlendds/studium/tree/master/docs)_

## Roadmap

See the [open issues](https://github.com/jerlendds/studium/issues) for a list of proposed features (and known issues).

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the GPLv3 License. See `LICENSE` for more information.

## Contact

Jerlends - [@jerlends_0x0](https://twitter.com/@jerlends_0x0) - jerlends@tuta.io

Project Link: [https://github.com/jerlendds/studium](https://github.com/jerlendds/studium)

## Acknowledgements

I would like to thank Noah#3612 for being an early supporter of this project.

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/jerlendds/studium.svg?style=for-the-badge
[contributors-url]: https://github.com/jerlendds/studium/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/jerlendds/studium.svg?style=for-the-badge
[forks-url]: https://github.com/jerlendds/studium/network/members
[stars-shield]: https://img.shields.io/github/stars/jerlendds/studium.svg?style=for-the-badge
[stars-url]: https://github.com/jerlendds/studium/stargazers
[issues-shield]: https://img.shields.io/github/issues/jerlendds/studium.svg?style=for-the-badge
[issues-url]: https://github.com/jerlendds/studium/issues
[license-shield]: https://img.shields.io/github/license/jerlendds/studium.svg?style=for-the-badge
[license-url]: https://github.com/jerlendds/studium/blob/master/LICENSE
